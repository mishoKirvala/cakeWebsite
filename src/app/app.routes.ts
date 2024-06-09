import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/feature/home/home.route').then(r => r.ROUTE)
    },
    {

        path: 'birthday',
        loadComponent: () => import('./shared/components/product-details/product-details.component').then(m => m.ProductDetailsComponent)
    },

    {
        path: 'jar',
        loadChildren: () => import('../app/shared/components/product-details/product-details.routes').then(r => r.ROUTES)
    },

    {
        path: 'kids',
        loadChildren: () => import('../app/feature/kids/kids.router').then(r => r.ROUTE)
    }
];
