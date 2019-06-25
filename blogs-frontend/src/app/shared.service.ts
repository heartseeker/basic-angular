import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  login = new Subject();

  loginState = this.login.asObservable();

  constructor() { }

  logon(status: boolean) {
    this.login.next(status);
  }
}
