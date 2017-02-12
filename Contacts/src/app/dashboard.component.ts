import { Contact } from './contact';
import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
   this.contactService.getContacts().then(contacts => this.contacts = contacts.slice(1, 5));
  }

  }
