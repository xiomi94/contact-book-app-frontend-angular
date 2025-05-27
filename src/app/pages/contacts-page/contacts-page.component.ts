import {ChangeDetectionStrategy, Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ContactModel} from '../../models/contact.model';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {ContactItemListComponent} from '../../components/contact-item-list/contact-item-list.component';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {AddNewContactComponent} from '../../components/add-new-contact/add-new-contact.component';
import {FormGroup, NonNullableFormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    ContactItemListComponent,
    NzDrawerModule,
    AddNewContactComponent
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPageComponent implements OnInit {

  backend = inject(BackendService)
  formBuilder = inject(NonNullableFormBuilder);

  contacts = signal<ContactModel[]>([])
  addContactIsVisible = signal<boolean>(false)
  isMobileMediaQuery = signal<boolean>(false)

  newContactForm = signal<FormGroup>(
    this.formBuilder.group({
      name: [''],
      lastname: [''],
      telephoneNumber: [''],
      email: ['']
    })
  )

  ngOnInit(): void {
    this.backend.getContacts().subscribe((response: ContactModel[]) => {
      this.contacts.set(response)
    })

    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    this.isMobileMediaQuery.set(!mediaQuery.matches)
    mediaQuery.addEventListener('change', (event) => {
      this.isMobileMediaQuery.set(!event.matches)
    });
  }

  addNewContactButtonClick(): void {
    this.addContactIsVisible.set(true)
    this.newContactForm().reset()
  }

  closeDrawerAddNewContact(): void {
    this.addContactIsVisible.set(false)
  }

  getContactDataByForm(): ContactModel {
    const contact: ContactModel = {
      name: this.newContactForm().get('name')!.value,
      lastname: this.newContactForm().get('lastname')!.value,
      telephoneNumber: this.newContactForm().get('telephoneNumber')!.value,
      email: this.newContactForm().get('email')!.value
    }
    return contact
  }

  onSaveNewContactButtonClick(): void {
    this.addContactIsVisible.set(false)
    const body: ContactModel = this.getContactDataByForm()
    this.backend.postContact(body).subscribe((response: ContactModel) => {
      this.contacts.update((oldValue) => {
        const newContacts: ContactModel[] = [...oldValue, response]
        return newContacts
      })
    })

  }

  deleteContact(contact: ContactModel): void {
    this.backend.deleteContact(contact.id!).subscribe(() => {
      this.contacts.update((oldValue) => {
        const newContactList: ContactModel[] = oldValue.filter(iterateContact => iterateContact.id !== contact.id);
        return newContactList
      })
    })
  }
}
