import { Component, OnInit, Input } from '@angular/core';
import { iProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-generic-carousel',
  templateUrl: './products-generic-carousel.component.html',
  styleUrls: ['./products-generic-carousel.component.scss']
})
export class ProductsGenericCarouselComponent implements OnInit {

  @Input() products!: iProduct[]

  constructor() { }

  ngOnInit(): void {
  }

}
