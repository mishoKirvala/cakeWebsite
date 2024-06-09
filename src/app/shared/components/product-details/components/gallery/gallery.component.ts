import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  images = [
    {
      src: '../../../../../../assets/cakes/cake7.webp',
      alt: 'cake'

    },

    {
      src: '../../../../../../assets/cakes/cake8.webp',
      alt: 'cake'

    },

    {
      src: '../../../../../../assets/cakes/cake9.webp',
      alt: 'cake'

    },

    {
      src: '../../../../../../assets/cakes/cake10.webp',
      alt: 'cake'

    },

    {
      src: '../../../../../../assets/cakes/cake11.webp',
      alt: 'cake'

    },
  ]

  mainImage = signal(this.images[0])

  setMainImage(img: { src: string, alt: string }) {
    this.mainImage.update(i => i = img)
  }
}
