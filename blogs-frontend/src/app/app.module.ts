import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './core/http.service';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [ HttpService, SharedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
