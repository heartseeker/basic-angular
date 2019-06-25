import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogs-frontend';

  logon: boolean;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.loginState.subscribe((status: boolean) => {
      this.logon = status;
    });
  }

  onLogout() {
    this.sharedService.logon(false);
    this.router.navigate(['/users/login']);
  }
}
