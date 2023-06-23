import { Component,  Input, OnInit} from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { multi } from './data';
import { DataService, IdList, NameValue, WeightData } from 'src/app/services/data.service';
import {single} from "rxjs/operators";
import { Subject } from 'rxjs';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  // @Input() lineChartData: any[] = multi;
  lineChartData?: any = [];
  @Input() showLegend: boolean = true;
  @Input() showLabels: boolean = true;
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() showXAxisLabel: boolean = false;
  @Input() showYAxisLabel: boolean = false;
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  // @Input() resetSubject: Subject<boolean> = new Subject<boolean>();

  view: [number, number] = [700, 400]; // Ancho, alto
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dataService: DataService) {
    Object.assign(this, { single });
    // Object.assign(this, { multi });
  }

  ngOnInit() {
    this.initData();
  //   this.resetSubject.subscribe(response => {
  //     if(response){
  //      this.ngOnInit();
  //     // Or do whatever operations you need.
  //   }
  //  })
  }

  async update() {
    let result = await this.dataService.record10Measures();
    console.log(result);
    this.ngOnInit();
    }



//   private async initData(){
//     this.dataService.getData().subscribe((data: IdList[]) => {
//       console.log(`data is ${data}}`)
//       this.lineChartData = data
//     })
//  }

private async initData(){
  let data = await this.dataService.getData();
  let nameValueArr = data?.map((obj:IdList) => NameValue.toNameValue(obj))
  this.lineChartData = [WeightData.toWeightData(nameValueArr)]

}
}


// import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
// import { multi } from './data';
// import {Color, LegendPosition, ScaleType} from "@swimlane/ngx-charts";
// import {single} from "rxjs/operators";
// import { DataService } from 'src/app/services/data.service';


// @Component({
//   selector: 'app-line-chart',
//   templateUrl: './line-chart.component.html',
//   styleUrls: ['./line-chart.component.scss']
// })

// export class LineChartComponent implements OnInit, AfterViewInit{
  
//   @Input() view: [number, number] = [700, 400]; // width, height
//   legendPosition = LegendPosition.Below;
//   colorScheme: Color = {
//     name: 'myScheme',
//     selectable: true,
//     group: ScaleType.Ordinal,
//     domain: [],
//   };
//   @Input() lineChartData: any[] = [];
//   @Input() showLegend: boolean = true;
//   @Input() showLabels: boolean = true;
//   @Input() showXAxisLabel: boolean = false;
//   @Input() showYAxisLabel: boolean = false;
//   @Input() yAxisLabel: string = '';
//   @Input() xAxisLabel: string = '';

//   // options
//   // animations: boolean = true;
//   // xAxis: boolean = true;
//   // yAxis: boolean = true;
//   // timeline: boolean = true;


  // constructor(private dataService: DataService) {
  //   // Object.assign(this, { single });
  //   Object.assign(this, { multi });
  // }

//   ngOnInit(): void {
//     // this.initData();
//   }

//   ngAfterViewInit(): void {
//     let length = 0;
//     if (this.lineChartData.length > 0) length = this.lineChartData.length;

//     for (let i = 0; i < length; i++) {
//       this.colorScheme.domain.push(this.getRandomColor());
//     }
//   }

//   getRandomColor() {
//     let color = Math.floor(0x1000000 * Math.random()).toString(16);
//     return '#' + ('000000' + color).slice(-6);
//   }

  // private async initData(){
  //    this.dataService.getData().subscribe((response) => )
  // }

// }
