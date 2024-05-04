import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProductsCartListItemComponent } from './components/products-cart-list-item/products-cart-list-item.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductsCartListItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
