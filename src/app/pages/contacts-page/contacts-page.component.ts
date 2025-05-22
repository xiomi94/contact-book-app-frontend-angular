import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ContactModel} from '../../models/contact.model';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import {NzDividerModule} from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [
    NzAvatarComponent,
    NzDividerModule
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPageComponent {

  backend = inject(BackendService)

  contacts = signal<ContactModel[]>([
    {
      name: 'Xiomara',
      lastname: 'Jiménez Velázquez',
      telephoneNumber: '658663494',
      email: 'xomi94@gmail.com'
    },
    {
      name: 'Carlos',
      lastname: 'Caraballo Casañas',
      telephoneNumber: '697226702',
      email: 'carlos01@gmail.com'
    },
    {
      name: 'Laura',
      lastname: 'Martínez García',
      telephoneNumber: '123456789',
      email: 'laura.martinez@gmail.com'
    },
    {
      name: 'Vicente',
      lastname: 'Vega Hernández',
      telephoneNumber: '987654321',
      email: 'vicente1999@outlook.es'
    },
    {
      name: 'Sergio',
      lastname: 'Paredes León',
      telephoneNumber: '688998877',
      email: 'sergio.paredes@email.com'
    },
    {
      name: 'Natalia',
      lastname: 'Vargas Medina',
      telephoneNumber: '644556677',
      email: 'natalia.vargas@email.com'
    },
    {
      name: 'Hugo',
      lastname: 'Romero Delgado',
      telephoneNumber: '677889900',
      email: 'hugo.romero@email.com'
    },
    {
      name: 'Iván',
      lastname: 'Castillo López',
      telephoneNumber: '633778899',
      email: 'ivan.castillo@email.com'
    }
  ])

  ngOnInit(): void {
    this.backend.getContacts().subscribe((response: ContactModel[]) => {
      this.contacts.set(response)
    })
  }
}
