import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ResponsivenessService } from './services/responsiveness.service';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { ProductsGenericCarouselComponent } from './components/products-generic-carousel/products-generic-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsGenericCardComponent } from './components/products-generic-card/products-generic-card.component';
import { RouterModule } from '@angular/router';
import { WobblingLoaderComponent } from './components/wobbling-loader/wobbling-loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMobileComponent,
    CategoryCarouselComponent,
    ProductsGenericCarouselComponent,
    FooterComponent,
    ProductsGenericCardComponent,
    WobblingLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HeaderMobileComponent,
    CategoryCarouselComponent,
    ProductsGenericCarouselComponent,
    FooterComponent,
    ProductsGenericCardComponent,
    WobblingLoaderComponent
  ],
  providers: [
    ResponsivenessService
  ]
})
export class SharedModule { }
