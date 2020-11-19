import { Injectable } from '@angular/core';

import { ProductModel } from '../models';
import { productMockList } from './product-list';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class ProductsService {
  private productsSubject: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>(productMockList);
  products$: Observable<ProductModel[]> = this.productsSubject.asObservable();

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.getProducts().pipe(
      map((products: ProductModel[]) => products.find(product => product.productSKU === id)),
      catchError(err => throwError('Error in getProduct method'))
    );
  }
}
