import {ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
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
