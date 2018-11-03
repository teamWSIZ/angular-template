import {Component, OnInit} from '@angular/core';
import {UserdataserviceService} from '../userdataservice.service';
import {User} from '../model/user';
import {Category} from '../model/category';
import {Person} from '../model/person';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  users: User[];
  selectedUser: User;
  cats: Category[];

  user: Person;
  newroomid: string;



  constructor(
    private dataservice: UserdataserviceService,
    private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
    this.cats = [
      {id: 1, catname: 'worker'},
      {id: 2, catname: 'worker+'},
      {id: 3, catname: 'aspirant'},
      {id: 4, catname: 'leutenant'},
      {id: 5, catname: 'general'}
    ];
    this.user = new Person();

  }

  loadUsers() {
    this.dataservice.getUsers().subscribe(json => {
      this.users = json;
      this.selectedUser = this.users[0];
    });
  }

  createUser() {
    const url = 'http://10.10.0.55:8086/users/create?nick=' + this.user.nick;
    this.http.get<Person>(url)
      .subscribe(data=>{
        this.user = data;
        console.log('Utworzono nowego użytkownika');
      })
  }

  createRoom() {
    const url = 'http://10.10.0.55:8086/rooms/create?roomid=' + this.newroomid;
    this.http.get<Person>(url)
      .subscribe(data=>{
        this.user = data;
        console.log('Utworzono nowy pokój');
      })
  }
}
