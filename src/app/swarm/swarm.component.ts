import {Component, OnInit} from '@angular/core';
import {Device} from '../model/device';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.css']
})
export class SwarmComponent implements OnInit {
  devices: Device[];
  mainUrl = 'http://10.10.0.55:7777';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('ściągam listę deviceów');
    //sposób na ściąganie danych po http
    const url = this.mainUrl + '/devices';
    this.http.get<Device[]>(url)
      .subscribe(value => {
        this.devices = value;
        console.log('Devices:' + JSON.stringify(this.devices));
      });
  }



}
