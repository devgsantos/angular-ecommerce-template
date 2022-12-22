import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { productTypes } from "../../../misc/product-types";

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCarouselComponent implements OnInit {

  categories!: any

  constructor() { }

  ngOnInit(): void {
    this.categories = productTypes
  }

}
