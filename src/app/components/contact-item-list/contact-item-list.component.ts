import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {ContactModel} from '../../models/contact.model';

@Component({
  selector: 'app-contact-item-list',
  standalone: true,
    imports: [
        NzAvatarComponent
    ],
  templateUrl: './contact-item-list.component.html',
  styleUrl: './contact-item-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactItemListComponent {

  contact = input.required<ContactModel>()

}
