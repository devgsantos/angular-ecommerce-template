import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { iProduct, iProductRequestParams } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products!: iProduct[];
  productsRequestParams!: iProductRequestParams;
  brands: string[] = [];
  selectedBrand: string = '';
  isLoadingProducts: boolean = true;

  constructor(
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
        this.selectedBrand = '';
        if (value['brand']) {
          this.selectedBrand = value['brand'];
          this.brands.find(b => b === this.selectedBrand)
        }
        this.brands = [];
        this.loadProducts();
      }
    });
  }

  ngOnInit(): void {
    
  }

  loadProducts() {
    this.productsService
    .getProducts(this.productsRequestParams)
    .subscribe({
      next: (response:  iProduct | iProduct[]) => {
        this.products = response as iProduct[];
        this.products
        .forEach(p => {
          if (!this.brands.includes(p.brand)) {
            this.brands.push(p.brand)
          }
        });
        this.isLoadingProducts = false;
      }
    })
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...this.productsRequestParams,
        brand: this.selectedBrand.replace(/\s+/g, '_'),
      },
    });
  }

  clearBrand() {
    this.selectedBrand = '';
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        productTypeId: this.productsRequestParams.productTypeId,
        producTypeTitle: this.productsRequestParams.producTypeTitle,
        productCategoryId: this.productsRequestParams.productCategoryId,
        productCategoryTitle: this.productsRequestParams.productCategoryTitle
      },
    });
  }

}
