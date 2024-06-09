import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShopComponent } from '../../shared/components/shop/shop.component';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [ShopComponent],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KidsComponent {

}
