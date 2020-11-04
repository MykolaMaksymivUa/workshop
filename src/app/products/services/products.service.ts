import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductModel } from '../models';
import { productMockList } from './product-list';


@Injectable({
  providedIn: 'any'
})
export class ProductsService {
  products$: Observable<ProductModel[]> = of(productMockList);

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }
}
