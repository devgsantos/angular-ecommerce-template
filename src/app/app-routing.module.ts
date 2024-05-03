import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./views/home/home.module')
    .then(m => m.HomeModule) 
  },
  {
    path: 'products', 
    loadChildren: () => import('./views/products/products.module')
    .then(m => m.ProductsModule) 
  },
  { path: 'cart', loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
