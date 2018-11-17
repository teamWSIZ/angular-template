import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {FileItem, FileUploader} from 'ng2-file-upload';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message: string;
  user: Person;
  url: string;
  uploader: FileUploader;
  // iimg = 'assets/img/ff_s.png';
  iimg = 'http://10.10.0.55:8086/download?filename=ff.png';

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.user = new Person();
    this.url = this.global.host;
    this.uploader = new FileUploader(
      {url: this.url + '/upload', removeAfterUpload: false, autoUpload: true});
  }

  upload_file() {
    console.log('uploading..');
    const qu: FileItem[] = this.uploader.queue;
    if (qu.length === 1) {
      console.log('Uploading ' + qu[0]._file.name);
      qu[0].upload();
    }
  }
}
