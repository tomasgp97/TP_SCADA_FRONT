import { Component, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TP_SCADA_FRONT';
  @ViewChild(LineChartComponent, { static: false }) childC: LineChartComponent;
  showChild: boolean = true;
  // resetSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {}

  onUpdateChart() {
    this.childC.update();
 }

//   resetChart(){
//     this.resetSubject.next(true);
//  }
}
