import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Trade1Component } from './trade1/trade1.component';
import { ParamsComponent } from './params/params.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { LogComponent } from './log/log.component';
import { LgtComponent } from './lgt/lgt.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    Trade1Component,
    ParamsComponent,
    HeaderComponent,
    ClientComponent,
    LogComponent,
    LgtComponent,
    AddComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
