import { Route } from "@angular/router";
import { ProductDetailsComponent } from "./product-details.component";

export const ROUTES: Route[] = [
    {
        path: '',
        component: ProductDetailsComponent,
        pathMatch: 'full'
    }
]