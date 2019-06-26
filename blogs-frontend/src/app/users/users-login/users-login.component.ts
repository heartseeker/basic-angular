import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent implements OnInit {

  form: FormGroup;
  error = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logon() {
    // TODO: call to api
    if (this.authService.login(this.form.value)) {
      this.sharedService.logon(true);
      this.router.navigate(['/blogs']);
    } else {
      this.error = true;
    }
  }

}
