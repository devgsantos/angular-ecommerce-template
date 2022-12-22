import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { queryParameters } from "../../../misc/query-parameters";
import { brandsList } from "../../../misc/brands-list";
import { Observable, take, timeout } from 'rxjs';
import { iProduct } from 'src/app/shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {

  constructor(
    private http: HttpClient
  ) { }

  get brand() {
    return brandsList.filter(p => p.name == 'covergirl');
  }

  getFeatured(): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(environment.api + '?brand=covergirl&product_type=lipstick')
    .pipe(
      take(3),
      timeout(10000)
    )
  }
}
