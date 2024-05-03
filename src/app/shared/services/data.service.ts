import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iCart } from 'src/app/views/cart/interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cartList = new BehaviorSubject<iCart[]>([])

  constructor() { }

}
