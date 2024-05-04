import { Component } from '@angular/core';
import { ResponsivenessService } from './shared/services/responsiveness.service';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor (
    public reponsiveness: ResponsivenessService,
    private dataService: DataService
  ) {  
    this.reponsiveness.getBreakpoints();
    // CHECKING EXISTING CART ON LOCAL STORAGE
    // IT MAY BE CHANGED FOR A WEBSERVICE CART ENDPOINT
    if (localStorage.getItem('cart') !== null) {
      this.dataService.cartList.next(JSON.parse(localStorage.getItem('cart')!))
    }
    if (localStorage.getItem('wishlist') !== null) {
      this.dataService.cartList.next(JSON.parse(localStorage.getItem('wishlist')!))
    }
  }

  title = 'makeup-shop-app';
}
