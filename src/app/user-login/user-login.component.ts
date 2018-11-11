import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message: string;
  user: Person;
  uploader: FileUploader = new FileUploader({url: 'https://upload', removeAfterUpload: false, autoUpload: true});

  constructor() { }

  ngOnInit() {
  }

}
