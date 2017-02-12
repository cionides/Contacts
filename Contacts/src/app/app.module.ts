import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactsComponent } from './contacts.component';
import { ContactService } from './contact.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactDetailComponent,
    ContactsComponent
  ],
  providers: [ ContactService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
