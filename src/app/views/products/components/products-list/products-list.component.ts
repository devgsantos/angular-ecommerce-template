import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { 
    this.route.queryParams
    .subscribe({
      next: value => {
        this.productsRequestParams = value;
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
      }
    })
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand;
    UIkit.dropdown(this.brandsDropdown.nativeElement).hide();
  }

  clearBrand() {
    this.selectedBrand = '';
    UIkit.dropdown(this.brandsDropdown.nativeElement).hide();
  }

}
