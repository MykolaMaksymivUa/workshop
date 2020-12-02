import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry, share } from 'rxjs/operators';

import { CheckoutModel, OrderModel } from './../models';
import { CartService } from './../../cart/services/cart.service';
import { CONSTANT_CONFIG, Constants } from 'src/app/core/shared/constant.config';
import { SpinnerService } from 'src/app/core/widgets';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    @Inject(CONSTANT_CONFIG) private cfg: Constants,
    private http: HttpClient,
    private spinner: SpinnerService,
  ) {
  }

  submitOrder(checkoutData: CheckoutModel): Observable<OrderModel> {
    const order = { ...checkoutData, orderDate: new Date() };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<OrderModel>(this.cfg.ordersEndpoint, JSON.stringify(order), options)
      .pipe(
        retry(1),
        share(),
        catchError(this.handleError)
      );
  }

  getOrderList(): Observable<OrderModel[]> {
    // this.spinner.show();

    return this.http.get<OrderModel[]>(this.cfg.ordersEndpoint)
      .pipe(
        retry(1),
        share(),
        // finalize(() => this.spinner.hide()),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
