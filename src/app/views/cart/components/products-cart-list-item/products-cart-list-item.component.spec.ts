import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCartListItemComponent } from './products-cart-list-item.component';

describe('ProductsCartListItemComponent', () => {
  let component: ProductsCartListItemComponent;
  let fixture: ComponentFixture<ProductsCartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCartListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
