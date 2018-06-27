import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DutyDetailComponent } from './duty-detail/duty-detail.component';
import { DutiesComponent } from './duties/duties.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DutiesComponent,
    DutyDetailComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }