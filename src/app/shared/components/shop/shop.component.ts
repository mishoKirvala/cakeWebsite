import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { data } from '../../../data';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent {

  productList = data
}
