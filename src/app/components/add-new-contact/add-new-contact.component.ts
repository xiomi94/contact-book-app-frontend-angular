import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzWaveDirective} from 'ng-zorro-antd/core/wave';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-new-contact',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzWaveDirective,
    NzAvatarComponent,
    NzInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-new-contact.component.html',
  styleUrl: './add-new-contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewContactComponent {

  newContactForm = input.required<FormGroup>()

}
