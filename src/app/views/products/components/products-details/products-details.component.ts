import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent { 

  products!: iProduct;
  isLoadingProducts: boolean = true;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

}
