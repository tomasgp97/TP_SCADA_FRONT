import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { multi } from './data';
import {Color, LegendPosition, ScaleType} from "@swimlane/ngx-charts";
import {single} from "rxjs/operators";


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit, AfterViewInit{
  
  @Input() view: [number, number] = [700, 400]; // width, height
  legendPosition = LegendPosition.Below;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [],
  };
  @Input() lineChartData: any[] = [];
  @Input() showLegend: boolean = true;
  @Input() showLabels: boolean = true;

  // options
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Weight';
  timeline: boolean = true;


  constructor() {
    // Object.assign(this, { single });
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let length = 0;
    if (this.lineChartData.length > 0) length = this.lineChartData.length;

    for (let i = 0; i < length; i++) {
      this.colorScheme.domain.push(this.getRandomColor());
    }
  }

  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

}
