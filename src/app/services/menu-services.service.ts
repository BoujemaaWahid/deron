import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public notification: BehaviorSubject<any>;
  public message: BehaviorSubject<any>;
  constructor() {
    this.notification = new BehaviorSubject(null);
    this.message = new BehaviorSubject(null);
    let i = 0;
    setInterval(()=>{
      this.notification.next( i++ );
    }, 1000)
  }
}
