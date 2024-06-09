import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductComponent } from '../../../../shared/components/product/product.component';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [RouterLink, ProductComponent],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestSellerComponent {
  bestSeller = [
    {
      img: {
        src: '../../../../../assets/cakes/cake10.webp',
        alt: 'cake'
      },
      title: 'chocolate cake',
      price: 5,
      id: 1
    },

    {
      img: {
        src: '../../../../../assets/cakes/cake11.webp',
        alt: 'cake'
      },
      title: 'jar cake ',
      price: 10,
      id: 2
    },

    {
      img: {
        src: '../../../../../assets/cakes/cake8.webp',
        alt: 'cake'
      },
      title: 'brown cake',
      price: 7,
      id: 3
    },
    {
      img: {
        src: '../../../../../assets/cakes/cake10.webp',
        alt: 'cake'
      },
      title: 'chocolate cake',
      price: 5,
      id: 4
    },

    {
      img: {
        src: '../../../../../assets/cakes/cake11.webp',
        alt: 'cake'
      },
      title: 'jar cake ',
      price: 10,
      id: 5
    },

    {
      img: {
        src: '../../../../../assets/cakes/cake8.webp',
        alt: 'cake'
      },
      title: 'brown cake',
      price: 7,
      id: 6
    },
    {
      img: {
        src: '../../../../../assets/cakes/cake10.webp',
        alt: 'cake'
      },
      title: 'chocolate cake',
      price: 5,
      id: 7
    },

    {
      img: {
        src: '../../../../../assets/cakes/cake11.webp',
        alt: 'cake'
      },
      title: 'jar cake ',
      price: 10,
      id: 8
    },
  ]
}
