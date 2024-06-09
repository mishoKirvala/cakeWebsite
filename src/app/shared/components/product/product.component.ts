import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() home = false
  @Input() product = {
    img: {
      src: '../../../../assets/cakes/cake10.webp',
      alt: 'cake'
    },
    title: 'chocolate cake',
    price: 5,
    id: 1
  }
}
