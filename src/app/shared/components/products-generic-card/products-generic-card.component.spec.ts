import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGenericCardComponent } from './products-generic-card.component';

describe('ProductsGenericCardComponent', () => {
  let component: ProductsGenericCardComponent;
  let fixture: ComponentFixture<ProductsGenericCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGenericCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGenericCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
