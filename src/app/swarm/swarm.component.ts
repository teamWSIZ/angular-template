import {Component, OnInit} from '@angular/core';
import {Device} from '../model/device';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.css']
})
export class SwarmComponent implements OnInit {
  devices: Device[];
  mainUrl = 'http://10.10.0.55:7777';
  warn= false;
  newMAC: string;

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

  // @GetMapping(value = "/identify")
  // public Device identify(
  //   @RequestParam(value = "mac") String mac,
  // @RequestParam(value = "name", required = false) String name,
  // @RequestParam(value = "nameA", required = false) String nameA,
  // @RequestParam(value = "nameB", required = false) String nameB,
  // @RequestParam(value = "nameC", required = false) String nameC


  saveDevice(d: Device) {
    const url = this.mainUrl + '/identify';
    const params = new HttpParams()
      .set('mac', d.macAddress)
      .set('name', d.name)
      .set('nameA', d.nameA)
      .set('nameB', d.nameB)
      .set('nameC', d.nameC);
    this.http.get<Device>(url,{params})
      .subscribe(value => {
        d = value;
      });
  }
}
