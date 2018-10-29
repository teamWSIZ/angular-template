import { Component, OnInit } from '@angular/core';
import {UserdataserviceService} from '../userdataservice.service';
import {User} from '../model/user';
import {Cat} from '../model/cat';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  users: User[];
  selectedUser: User;
  cats: Cat[];

  constructor(
    private dataservice: UserdataserviceService) {}

  ngOnInit() {
    this.loadUsers();
    this.cats = [
      {id: 1, catname: 'worker'},
      {id: 2, catname: 'worker+'},
      {id: 3, catname: 'aspirant'},
      {id: 4, catname: 'leutenant'},
      {id: 5, catname: 'general'}
    ];

  }

  loadUsers() {
    this.dataservice.getUsers().subscribe(json => {
      this.users = json;
      this.selectedUser = this.users[0];
    });
  }

}
