import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iProduct, iProductRequestParams } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import UIkit from 'uikit';

@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products!: iProduct[];
  @ViewChild('brandsDropdown') brandsDropdown!: ElementRef;
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
        this.productsRequestParams = value;
        this.selectedBrand = '';
        if (value['brand']) {
          this.selectedBrand = value['brand'];
          this.brands.find(b => b === this.selectedBrand)
        }
        this.brands = [];
        this.loadProducts();
      }
    })
  }

  ngOnInit(): void {
    
  }

  loadProducts() {
    this.productsService
    .getProducts(this.productsRequestParams)
    .subscribe({
      next: response => {
        this.products = response;
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
        producTypeId: this.productsRequestParams.producTypeId,
        producTypeTitle: this.productsRequestParams.producTypeTitle,
        productCategoryId: this.productsRequestParams.productCategoryId,
        productCategoryTitle: this.productsRequestParams.productCategoryTitle
      },
    });
  }

}
