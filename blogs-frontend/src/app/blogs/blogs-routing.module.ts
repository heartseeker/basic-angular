import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsIndexComponent } from './blogs-index/blogs-index.component';
import { BlogsEditComponent } from './blogs-edit/blogs-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard';


const routes: Routes = [
  { path: ':id', component: BlogsEditComponent, canActivate: [ AuthGuard ] },
  { path: '', component: BlogsIndexComponent, canActivate: [ AuthGuard ]  },
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
export class BlogsRoutingModule {
  static components = [ BlogsIndexComponent, BlogsEditComponent ];
 }
