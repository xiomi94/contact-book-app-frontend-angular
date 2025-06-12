import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    NzInputModule,
    NzIconModule 
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  searchQuery = output<string>()

  buscarContacto(event: KeyboardEvent): void {
    if (event.key == "Enter") {
      const target = event.target as HTMLInputElement
      this.searchQuery.emit(target.value)

    }
  }
}
