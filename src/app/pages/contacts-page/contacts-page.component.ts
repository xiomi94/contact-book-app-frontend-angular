import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ContactModel} from '../../models/contact.model';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {ContactItemListComponent} from '../../components/contact-item-list/contact-item-list.component';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    ContactItemListComponent
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPageComponent implements OnInit {

  backend = inject(BackendService)

  contacts = signal<ContactModel[]>([])

  ngOnInit(): void {
    this.backend.getContacts().subscribe((response: ContactModel[]) => {
      this.contacts.set(response)
    })
  }
}
