import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGenericCarouselComponent } from './products-generic-carousel.component';

describe('ProductsGenericCarouselComponent', () => {
  let component: ProductsGenericCarouselComponent;
  let fixture: ComponentFixture<ProductsGenericCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGenericCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGenericCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
