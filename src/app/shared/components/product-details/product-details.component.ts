import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DescriptionComponent } from './components/description/description.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [GalleryComponent, DescriptionComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {

  // id = signal(1)

  // su: any = []


  // constructor(private route: ActivatedRoute) {

  // }
  // ngOnInit(): void {
  //   this.su.push(this.route.queryParams.subscribe(params => {

  //     this.id.update(v => v = params['id'])

  //   }))



  // }


  // ngOnDestroy(): void {
  //   this.su.forEach((s: any) => s.unsubscribe())
  // }

}
