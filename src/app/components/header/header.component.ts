import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzIconModule,
    NzAvatarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
