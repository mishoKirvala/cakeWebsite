import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-other-cakes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './other-cakes.component.html',
  styleUrl: './other-cakes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherCakesComponent {

  otherCakes = [
    {
      src: '../../../../../assets/cakes/pastries.webp',
      alt: 'pastries',
      route: '/pastries'
    },
    {
      src: '../../../../../assets/cakes/jar.webp',
      alt: 'jar',
      route: '/jar'
    },
    {
      src: '../../../../../assets/cakes/cup_cakes.webp',
      alt: 'cupcake',
      route: '/cupcakes'
    },
    {
      src: '../../../../../assets/cakes/brownies.webp',
      alt: 'brownies',
      route: '/brownies'
    },
    {

      src: '../../../../../assets/cakes/hampers.webp',
      alt: 'hampers',
      route: '/hampers'
    }
  ]
}
