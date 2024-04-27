import { Component, OnInit } from '@angular/core';
import { productTypes } from 'src/app/misc/product-types';
import { iProductTypes } from '../../interfaces/product.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  productTypes!: iProductTypes[]

  constructor() { }

  ngOnInit(): void {
    this.productTypes = productTypes
  }

}
