import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/users/login']);
    return false;
  }
}
