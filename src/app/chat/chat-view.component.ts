import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sel} from '../model/sel';

@Component({
  selector: 'app-second',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  // users: User[];
  // selectedUser: User;
  // cats: Category[];

  // shared with children
  @Input() selection = new Sel();



  constructor(
    private http: HttpClient) {}

  ngOnInit() {
    // this.loadUsers();
    // this.cats = [
    //   {id: 1, catname: 'worker'},
    //   {id: 2, catname: 'worker+'},
    //   {id: 3, catname: 'aspirant'},
    //   {id: 4, catname: 'leutenant'},
    //   {id: 5, catname: 'general'}
    // ];
  }

  // loadUsers() {
  //   this.dataservice.getUsers().subscribe(json => {
  //     this.users = json;
  //     this.selectedUser = this.users[0];
  //   });
  // }

}
