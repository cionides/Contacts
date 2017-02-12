import { Contact } from './contact';
import { ContactService } from './contact.service';
import { CONTACTS } from './mock-contacts';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {


  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contactService: ContactService, private router: Router) { }

  getContacts(): void {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }

  ngOnInit(): void {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
}

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedContact.id]);
}

}
