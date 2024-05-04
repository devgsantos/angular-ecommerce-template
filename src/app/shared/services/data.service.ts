import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iCartItem } from 'src/app/views/cart/interfaces/cart.interface';
import { iProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cartList = new BehaviorSubject<iCartItem[]>([])
  wishList = new BehaviorSubject<iProduct[]>([])

  constructor() { }

}
