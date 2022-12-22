import { Component, OnInit } from '@angular/core';
import { iProduct } from 'src/app/shared/interfaces/product.interface';
import { FeaturedProductsService } from './services/featured-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredProducts!: iProduct[];

  constructor(
    private featured: FeaturedProductsService
  ) { }

  ngOnInit(): void {
    this.featured.getFeatured()
    .subscribe({
      next: (response: iProduct[]) => {
        this.featuredProducts = response
        console.log(response)
      }
    })
  }

}
