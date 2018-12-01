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
  //ta tablica bedzie wyswietlana w tabeli (z thumbnailami obrazkow)
  pictures = [
    {
      'albumId': 1,
      'id': 1,
      'title': 'accusamus beatae ad facilis cum similique qui sunt',
      'url': 'https://via.placeholder.com/600/92c952',
      'thumbnailUrl': 'https://via.placeholder.com/150/92c952'
    },
    {
      'albumId': 1,
      'id': 2,
      'title': 'reprehenderit est deserunt velit ipsam',
      'url': 'https://via.placeholder.com/600/771796',
      'thumbnailUrl': 'https://via.placeholder.com/150/771796'
    },{
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
    ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getLista() {
    console.log('ściągam listę');
    //sposób na ściąganie danych po http
    const url = 'https://10.10.11.12:8443/execute?' +
      'com=ps ax&pass=verysecret'; //lub tasklist
    this.http.get<ExecResponse>(url)
      .subscribe(value => {
        this.wynik = value.out;
      });
  }
}
