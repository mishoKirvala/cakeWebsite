import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OtherCakesComponent } from './components/other-cakes/other-cakes.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OtherCakesComponent, BestSellerComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
