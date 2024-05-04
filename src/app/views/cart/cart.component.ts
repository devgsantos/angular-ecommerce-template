import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { iCartItem } from './interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: iCartItem[];
  totalPrice: number = 0;

  constructor(
    private dataService: DataService
  ) { 
    this.dataService.cartList
    .subscribe({
      next: value => {
        if (value) {
          this.cartItems = value;
          value.forEach(
            cartItem => {
              this.totalPrice += parseFloat(cartItem.price) * cartItem.cart_quantity; 
            }
          )
        }
      }
    })
  }

  ngOnInit(): void {

  }

}
