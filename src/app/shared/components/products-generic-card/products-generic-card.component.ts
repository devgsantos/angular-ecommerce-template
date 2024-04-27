import { Component, OnInit, Input } from '@angular/core';
import { iProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-generic-card',
  templateUrl: './products-generic-card.component.html',
  styleUrls: ['./products-generic-card.component.scss'],
})
export class ProductsGenericCardComponent implements OnInit {

  @Input() product!: iProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
