import { Injectable } from '@angular/core';

/**
 * Publiczne metody i dane tego serwisu pozwalają na bezpośrednie podłączenie klientów.
 */

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public rooms=[];

  constructor() { }

  public addRoom(roomid : string) {
    this.rooms.push(roomid);
  }

}
