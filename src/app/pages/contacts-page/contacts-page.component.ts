import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ContactModel} from '../../models/contact.model';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [
    NzAvatarComponent,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPageComponent {

  backend = inject(BackendService)

  contacts = signal<ContactModel[]>([])

  ngOnInit(): void {
    this.backend.getContacts().subscribe((response: ContactModel[]) => {
      this.contacts.set(response)
    })
  }
}
