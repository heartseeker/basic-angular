import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsIndexComponent } from './blogs-index/blogs-index.component';
import { BlogsEditComponent } from './blogs-edit/blogs-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: BlogsEditComponent },
  { path: '', component: BlogsIndexComponent },
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
