import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FeaturedCardsComponent } from './featured-cards/featured-cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    SlideshowComponent,
    FeaturedCardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
