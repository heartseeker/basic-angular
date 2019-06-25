import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ BlogsRoutingModule.components ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
  ]
})
export class BlogsModule { }
