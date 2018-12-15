import {Component, OnInit} from '@angular/core';
import {Device} from '../model/device';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Alert} from "../model/alert";

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.css']
})
export class SwarmComponent implements OnInit {
  devices: Device[];
  mainUrl = 'https://10.10.0.55:7700';
  warn= false;
  newMAC: string;
  alerts: Alert[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.reloadDevices();
    this.alerts = [
      {title:'Nowy mac', message: 'Dodano nowe urządzenie AA', type: 'alert-success'},
      {title:'Nowy mac', message: 'Dodano nowe urządzenie BB', type: 'alert-success'},
      {title:'Nowy mac', message: 'Dodano nowe urządzenie CC', type: 'alert-success'},
    ]
  }

  addAlert(a : Alert) {
    this.alerts.push(a);
  }

  reloadDevices() {
    console.log('ściągam listę deviceów');
    //sposób na ściąganie danych po http
    const url = this.mainUrl + '/devices';
    this.http.get<Device[]>(url)
      .subscribe(value => {
        value.sort((a, b) => {
          return a.macAddress < b.macAddress ? 1 : -1;
        });
        this.devices = value;
        console.log('Devices:' + JSON.stringify(this.devices));
      });
  }

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
        this.reloadDevices();
      });
  }

  //adds device with mac=newMAC to the table (only "Save" uploads to server)
  addMAC() {
    let d = new Device();
    if (this.newMAC.length<4) {
      this.addAlert({title: 'Nieprawidłowy adres MAC', message: ' (adres MAC ma mieć >=4 znaki)',
        type: 'warning'});
      return;
    }
    d.macAddress = this.newMAC;
    d.nameA = 'temp';
    d.nameB = 'humi';
    d.nameC = 'wifi';
    this.devices.push(d);

    this.addAlert({title: 'Dodano urządzenie', message: ' dodano MAC ' + this.newMAC, type: 'success'});
  }

  deleteDevice(d: Device) {
    const url = this.mainUrl + '/identify';
    const params = new HttpParams()
      .set('mac', d.macAddress);
    this.http.delete<string>(url,{params})
      .subscribe(value => {
        console.log('Removing the device ' + d.macAddress + ' successful');
        this.reloadDevices();
      });
  }
}
