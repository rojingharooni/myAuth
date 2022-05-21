import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthLibModule } from 'projects/auth-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AuthLibModule,
    HttpClientModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
