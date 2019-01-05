import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from '../model/device';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Alert} from "../model/alert";
import {AlertbarComponent} from "../alertbar/alertbar.component";

@Component({
  selector: 'app-swarm',
  templateUrl: './temp-feel.component.html',
  styleUrls: ['./temp-feel.component.css']
})
export class TempFeelComponent implements OnInit {
  devices: Device[];
  rooms: string[];
  mainUrl = 'https://10.10.0.55:7700';
  warn= false;
  newMAC: string;
  @ViewChild(AlertbarComponent)
  alertbar: AlertbarComponent;
  selectedRoom: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rooms = ["Sala41", "Sala42", "Sala22", "Sala21"];
  }


}
