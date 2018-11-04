import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global.service';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  user = new Person();
  newroomid= '';
  message= '';
  host= '';

  constructor(
    private http : HttpClient,
    private global : GlobalService,
    private roomService : RoomService
  ) { }

  ngOnInit() {
    this.host = this.global.host;
  }


  createUser(username : string) {
    const url = this.host + '/users/create?nick=' + username;
    this.http.get<Person>(url)
      .subscribe(data=>{
        this.user = data;
        this.message= 'Utworzono użytkownika ' + username + ' hasło:' + this.user.pass;
        setTimeout(()=>{this.message=''}, 10000);  //message zniknie za 5 sekund
      }, ()=>{
        this.message= 'Błąd tworzenia użytkownika';
        setTimeout(()=>this.message='',3000);
      })
  }

  createRoom(roomname : string) {
    const url = this.host + '/rooms/create?roomid=' + roomname;
    this.http.get<Person>(url)
      .subscribe(data=>{
        this.message = 'Utworzono pokój ' + roomname;
        this.roomService.addRoom(roomname);

        setTimeout(()=>{this.message=''}, 5000);  //message zniknie za 5 sekund
      }, ()=>{
        this.message='Błąd tworzenia pokoju';
        setTimeout(()=>this.message='',3000);
      })
  }

}
