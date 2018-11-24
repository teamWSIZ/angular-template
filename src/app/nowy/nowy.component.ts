import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})
export class NowyComponent implements OnInit {
  wynik = [""];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getLista() {
    console.log('ściągam listę');
    const url = 'http://localhost:8086/execute?com=ps ax'; //lub tasklist
    this.http.get<string[]>(url)
      .subscribe(value => {
        this.wynik = value.out;
      });
  }
}
