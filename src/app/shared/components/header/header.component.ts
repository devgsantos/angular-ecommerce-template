import { Component, OnInit } from '@angular/core';
import { productTypes } from 'src/app/misc/product-types';
import { iProductTypes } from '../../interfaces/product.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  productTypes!: iProductTypes[];
  cartQuantity: number = 0;

  constructor(
    private dataService: DataService
  ) { 
    this.dataService
    .cartList
    .subscribe({
      next: value => {
        if (value.length > 0) {
          this.cartQuantity = value.length;
        }
      }
    })
  }

  ngOnInit(): void {
    this.productTypes = productTypes
  }

}
