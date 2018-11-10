import { Injectable } from '@angular/core';
import {Room} from './model/room';

/**
 * Publiczne metody i dane tego serwisu pozwalają na bezpośrednie podłączenie klientów.
 */

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public rooms: Room[];

  constructor() { }

  public addRoom(roomid : string) {
    let nowa = new Room();
    nowa.id = roomid;
    this.rooms.push(nowa);
  }

  public reliadRooms() {

  }

}
