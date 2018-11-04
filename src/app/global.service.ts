import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  host = 'http://10.10.0.55:8086';

  constructor() { }
}
