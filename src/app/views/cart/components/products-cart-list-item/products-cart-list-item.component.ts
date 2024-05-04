import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { iCartItem } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-products-cart-list-item',
  templateUrl: './products-cart-list-item.component.html',
  styleUrls: ['./products-cart-list-item.component.scss']
})
export class ProductsCartListItemComponent implements OnInit, OnChanges{

  @Input() cartItem!: iCartItem;
  itemTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cartItem'].currentValue) {
      this.calculateItemTotal();
    }
  }

  calculateItemTotal() {
    this.itemTotal = parseFloat(this.cartItem.price) * this.cartItem.cart_quantity; 
  }

}
