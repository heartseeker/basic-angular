import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersLoginComponent } from './users-login/users-login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: UsersLoginComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {
  static components = [ UsersLoginComponent ];
 }
