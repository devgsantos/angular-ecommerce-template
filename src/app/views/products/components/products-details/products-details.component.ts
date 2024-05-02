import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iProduct, iProductRequestParams } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent { 

  product!: iProduct;
  isLoadingProducts: boolean = true;
  productsRequestParams!: iProductRequestParams;
  quantity: number = 0;
  partialValue: number = 0;
  rating: number = 0;
  stars: number[] = [0, 1, 2, 3, 4];


  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { 
    this.route.queryParams
    .subscribe({
      next: value => {
        this.isLoadingProducts = true;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this.productsRequestParams = value;
        this.loadProduct();
      }
    });
  }

  loadProduct() {
    this.productsService
    .getProducts(this.productsRequestParams)
    .subscribe({
      next: (response: iProduct | iProduct[]) => {
        this.product = response as iProduct;
        this.isLoadingProducts = false;
      }
    })
  }

  add() {
    this.quantity++;
    this.partialValue = parseFloat(this.product.price) * this.quantity
  }

  remove() {
    if (this.quantity === 0) {
      return
    }
    this.quantity--
    this.partialValue = parseFloat(this.product.price) * this.quantity
  }

  rate(index: number): Array<any> {
    return Array.from({ length: index })
  }

}
