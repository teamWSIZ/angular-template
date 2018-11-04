import {Component, Input, OnInit} from '@angular/core';
import {Sel} from '../model/sel';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-roombrowse',
  templateUrl: './roombrowse.component.html',
  styleUrls: ['./roombrowse.component.css']
})
export class RoombrowseComponent implements OnInit {
  @Input() selection : Sel;

  constructor(public roomService : RoomService) { }

  ngOnInit() {
  }

  selectRoom(r: string) {
    this.selection
  }
}
