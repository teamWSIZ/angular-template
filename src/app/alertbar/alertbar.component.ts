import { Component, OnInit } from '@angular/core';
import {Alert} from "../model/alert";

@Component({
  selector: 'app-alertbar',
  templateUrl: './alertbar.component.html',
  styleUrls: ['./alertbar.component.css']
})
export class AlertbarComponent implements OnInit {
  alerts: Alert[];
  maxAlerts = 1;

  constructor() { }

  ngOnInit() {
    this.alerts = []
  }


  addAlert(title: string, message: string, type: string) {
    this.alerts.push({title: title, message: message, type: type});
    while(this.alerts.length>this.maxAlerts) this.alerts.shift();
  }

  removeAlert(a: Alert) {
    let idx = this.alerts.indexOf(a);
    this.alerts.splice(idx, 1);
  }


}
