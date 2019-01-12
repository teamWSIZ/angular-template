import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertbarComponent} from "../alertbar/alertbar.component";
import {GenericResponse} from "../model/genericresponse";

@Component({
  selector: 'app-swarm',
  templateUrl: './temp-feel.component.html',
  styleUrls: ['./temp-feel.component.css']
})
export class TempFeelComponent implements OnInit {
  rooms: string[];
  mainUrl = 'http://doha.wsi.edu.pl:8050';
  @ViewChild(AlertbarComponent)
  alertbar: AlertbarComponent;
  selectedRoom: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadRooms();

  }

  private loadRooms() {
    const url = this.mainUrl + '/rooms';
    this.http.get<string[]>(url)
      .subscribe(value => {
        this.rooms = value;
        this.rooms.sort();
      });
  }


  tempTooHigh() {
    this.vote(1, this.selectedRoom);
  }


  tempTooLow() {
    this.vote(-1, this.selectedRoom);
  }

  vote(value : number, room : string) {
    const url = this.mainUrl + '/vote/' + room + '/' + value;
    this.http.get<GenericResponse>(url)
      .subscribe(value => {
        console.log('Wynik zapisano w systemie');
      });
    this.alertbar.addAlert('Dzięki za info..', '', 'success');
  }

}
