import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ContactDetailComponent } from './contact-detail.component';
import { SearchBoxComponent } from './search-box.component';
import { ContactsComponent } from './contacts.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchBoxComponent,
    ContactDetailComponent,
    ContactsComponent
  ],
  providers: [ ContactService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }