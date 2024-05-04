import { Component, OnInit, Input } from '@angular/core';
import { iProduct } from '../../interfaces/product.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products-generic-card',
  templateUrl: './products-generic-card.component.html',
  styleUrls: ['./products-generic-card.component.scss'],
})
export class ProductsGenericCardComponent implements OnInit {

  @Input() product!: iProduct;
  isWishListed: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
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

}
