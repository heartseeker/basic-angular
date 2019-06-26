import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({username, password}) {
    // TODO: call to api
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('login', 'true');
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    return localStorage.getItem('login') === 'true' ? true : false;
  }
}
