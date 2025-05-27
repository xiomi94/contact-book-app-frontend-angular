import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {ContactModel} from '../../models/contact.model';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-contact-item-list',
  standalone: true,
  imports: [
    NzAvatarComponent,
    NzIconModule,
    NzButtonModule
  ],
  templateUrl: './contact-item-list.component.html',
  styleUrl: './contact-item-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactItemListComponent {

  contact = input.required<ContactModel>()
  deleteContact = output<ContactModel>()

  deleteContactEvent(): void {
    this.deleteContact.emit(this.contact())
  }

}
