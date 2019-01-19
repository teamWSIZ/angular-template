import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertbarComponent} from "../alertbar/alertbar.component";
import {GenericResponse} from "../model/genericresponse";
import {Test} from "../model/test";
import {Item} from "../model/item";

@Component({
  selector: 'app-swarm',
  templateUrl: './temp-feel.component.html',
  styleUrls: ['./temp-feel.component.css']
})
export class TempFeelComponent implements OnInit {
  rooms: string[];
  mainUrl = 'http://basra.wsi.edu.pl:1111';
  @ViewChild(AlertbarComponent)
  alertbar: AlertbarComponent;
  selectedRoom: string;

  selectedAlias: string;
  selectedTestId: number;
  items: Item[];



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadRooms();

  }

  private loadTest(alias: string) {
    const url = this.mainUrl + '/tests?alias=' + alias;
    this.http.get<Test>(url)
      .subscribe(value => {
        this.selectedTestId = value.testid;
        this.items = value.items;
      });
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

  filterIncomes(dane: any) {

  }

  all(items: Item[]) {
    return JSON.stringify(items);
  }
}
