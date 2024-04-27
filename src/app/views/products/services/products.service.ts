import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, timeout } from 'rxjs';
import { iProduct, iProductRequestParams } from 'src/app/shared/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient
  ) { }

  getProducts(productsRequestParams: iProductRequestParams): Observable<iProduct[]> {

    const { producTypeTitle, productCategoryTitle, productTag, brand } = productsRequestParams

    return this.http.get<iProduct[]>(`
      ${environment.api}?product_type=${producTypeTitle}${productCategoryTitle ? '&category_title=' + productCategoryTitle : ''}${productTag ? '&product_tags=' + productTag : ''}${brand ? '&brand=' + brand : ''}
    `)
    .pipe(
      take(3),
      timeout(10000)
    )
  }
}
