import {Component, Input, OnInit} from '@angular/core';
import {Sel} from '../model/sel';
import {RoomService} from '../room.service';
import {Person} from '../model/person';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';
import {Room} from '../model/room';

@Component({
  selector: 'app-roombrowser',
  templateUrl: './roombrowser.component.html',
  styleUrls: ['./roombrowser.component.css']
})
export class RoombrowserComponent implements OnInit {
  @Input() selection: Sel;
  host: string;

  constructor(
    public roomService: RoomService,
    public global: GlobalService,
    public http: HttpClient) { }

  ngOnInit() {
    this.host = this.global.host;
  }

  roomClicked() {
    console.log('Room clicked');
  }

  reloadRooms() {
    const url = this.host + '/rooms';
    this.http.get<Room[]>(url)
      .subscribe(data => {
        this.roomService.rooms = data;
      });
  }
}
