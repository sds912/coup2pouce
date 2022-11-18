import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  opened = new BehaviorSubject<boolean>(false);

  constructor() { }

  open(){
    this.opened.next(true);
  }

  close(){
    this.opened.next(false);
  }
}
