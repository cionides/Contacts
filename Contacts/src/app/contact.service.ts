import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  getContacts(): Promise<Contact[]> {
    return Promise.resolve(CONTACTS);
  }

  getContact(id: number): Promise<Contact> {
  return this.getContacts()
             .then(contacts => contacts.find(contact => contact.id === id));
}
}
