import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Sel} from '../model/sel';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';
import {Message} from '../model/message';

@Component({
  selector: 'app-messagebrowser',
  templateUrl: './messagebrowser.component.html',
  styleUrls: ['./messagebrowser.component.css']
})
export class MessagebrowserComponent implements OnInit {
  @Input() selection : Sel;
  messages : Message[];
  newmessagecontent: string;

  constructor(
    private global : GlobalService,
    private http : HttpClient
  ) { }

  ngOnInit() {
  }


  reload() {
    let url = this.global.host + "/rooms/messages?roomid=" + this.selection.room;
    this.http.get<Message[]>(url)
      .subscribe(value => {
        this.messages = value;
      });
  }

  sendMessage() {
    const url = this.global.host + "/rooms/messages";
    const msg = new Message();
    msg.authorNick = this.selection.user;
    msg.content = this.newmessagecontent;
    msg.room = this.selection.room;


    this.http.post(url, msg)
      .subscribe(value => {
        this.reload();
      })
  }
}
