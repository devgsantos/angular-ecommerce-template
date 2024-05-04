import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iProduct, iProductColor, iProductRequestParams, iSelectedVariant } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { DataService } from 'src/app/shared/services/data.service';
import { iCartItem } from 'src/app/views/cart/interfaces/cart.interface';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent { 

  @ViewChildren('colorItems') colorItems!: QueryList<ElementRef>;
  product!: iProduct;
  isLoadingProducts: boolean = true;
  productsRequestParams!: iProductRequestParams;
  quantity: number = 0;
  itemTotal: number = 0;
  rating: number = 0;
  stars: number[] = [0, 1, 2, 3, 4];
  selectedColor!: iProductColor;
  isWishListed: boolean = false;
  selectedVariants: iSelectedVariant[] = [];

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private dataService: DataService
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
    // TODO - VERIFY IF PRODUCT ALREADY EXISTS IN THE CART LIST
    this.dataService
    .cartList
    .subscribe({
      next: value => {
        if (value.length > 0) {
          console.log(value);
        }
      }
    });
    this.dataService
    .wishList
    .subscribe({
      next: value => {
        if (value && value.find(p => p.id === this.product.id)) {
          this.isWishListed === true
        }
      }
    })
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
    this.itemTotal = parseFloat(this.product.price) * this.quantity; 
  }

  remove() {
    if (this.quantity === 0) {
      return
    }
    this.quantity--
    this.itemTotal = parseFloat(this.product.price) * this.quantity
  }

  addToCart() {
    if (this.quantity === 0) {
      alert('Choose how many you want.');
      return
    }
    if (this.product.product_colors.length > 0 && !this.selectedColor) {
      alert('Choose a color');
      return
    }
    const existingItem = this.dataService.cartList.getValue()!.find(item => item.id === this.product.id);
    const addItem: iCartItem ={
      ...this.product,
      cart_quantity: this.quantity,
      partial_value: this.itemTotal,
      selected_color: this.selectedColor ? this.selectedColor : null
    }

    if (existingItem) {
      if (this.quantity !== existingItem.cart_quantity) {
        existingItem.cart_quantity = this.quantity;
        existingItem.partial_value = this.itemTotal;
      }
    } else {
      const currentCartList = this.dataService.cartList.getValue();
      this.dataService.cartList.next([...currentCartList, addItem]);
    }
  }

  addToWishList() {
    const existingItem = this.dataService.wishList.getValue()!.find(item => item.id === this.product.id);
    const addItem: iProduct ={
      ...this.product
    }
    let currentWishlist = this.dataService.wishList.getValue();

    if (!existingItem) {
      this.dataService.wishList.next([...currentWishlist, addItem]);
      this.isWishListed = true;
    } else {
      currentWishlist = currentWishlist.slice(0, currentWishlist.indexOf(currentWishlist.find(item => item.id === this.product.id)!))
      this.dataService.wishList.next(currentWishlist);
      this.isWishListed = false
    }
  }

  rate(index: number): Array<any> {
    return Array.from({ length: index })
  }

  selectColor(e: Event, color: iProductColor) {
    this.selectedColor = color;
    this.colorItems
    .forEach(elem => {
      const div: HTMLElement = elem.nativeElement;
      div.classList.remove('selected-color')
    });
    (e.target as HTMLElement).parentElement!.classList.add('selected-color')
  }

}
