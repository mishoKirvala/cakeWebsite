import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {

  index = signal(0);
  item = signal(0.5)
  price = computed(() => `$ ${5 * this.item()}`)

  setWeight(item: number, index: number) {
    this.item.update(i => i = item)
    this.index.update(i => i = index)
  }

}
