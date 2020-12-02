import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ProductModel } from '../models';
import { CONSTANT_CONFIG } from 'src/app/core/shared/constant.config';

import { Observable, throwError } from 'rxjs';
import { catchError, publish, refCount, retry, share } from 'rxjs/operators';


@Injectable({
  providedIn: 'any'
})
export class ProductsService {
  private productsURL: string = this.constList.productListEndpoint;

  constructor(
    @Inject(CONSTANT_CONFIG) private constList,
    private http: HttpClient,
  ) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsURL).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.productsURL}/${id}`).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
