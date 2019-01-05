import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from '../model/device';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Alert} from "../model/alert";
import {AlertbarComponent} from "../alertbar/alertbar.component";
import {GenericResponse} from "../model/genericresponse";

@Component({
  selector: 'app-swarm',
  templateUrl: './temp-feel.component.html',
  styleUrls: ['./temp-feel.component.css']
})
export class TempFeelComponent implements OnInit {
  rooms: string[];
  mainUrl = 'http://10.10.0.55:8888';
  @ViewChild(AlertbarComponent)
  alertbar: AlertbarComponent;
  selectedRoom: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rooms = ["Sala41", "Sala42", "Sala22", "Sala21"];
  }


  tempTooHigh() {
    this.vote(1, this.selectedRoom);
  }


  tempTooLow() {
    this.vote(-1, this.selectedRoom);
  }

  vote(value : number, room : string) {
    const url = this.mainUrl + '/vote?room=' + room + '&value=' + value;
    this.http.get<GenericResponse>(url)
      .subscribe(value => {
        console.log('Wynik zapisano w systemie');
      });
  }

}
