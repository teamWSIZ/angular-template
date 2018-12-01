import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExecResponse} from '../model/execResponse';

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})
export class NowyComponent implements OnInit {
  wynik = [""];
  imageUrl = 'https://via.placeholder.com/150/92c952';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getLista() {
    console.log('ściągam listę');
    const url = 'https://10.10.11.12:8443/execute?' +
      'com=ps ax&pass=verysecret'; //lub tasklist
    this.http.get<ExecResponse>(url)
      .subscribe(value => {
        this.wynik = value.out;
      });
  }
}
