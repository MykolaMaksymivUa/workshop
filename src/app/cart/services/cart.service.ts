import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CartEntryModel, CartDataModel } from './../models';
import { SpinnerService } from './../../core/widgets/spinner/spinner.service';
import { Constants, CONSTANT_CONFIG } from './../../core/shared/constant.config';


@Injectable({
  providedIn: 'any'
})
export class CartService {
  private _orderTotal = 0;
  private _totalQuantity = 0;
  private _cartEntries: CartEntryModel[] = [];

  constructor(
    @Inject(CONSTANT_CONFIG) private constList: Constants,
    private http: HttpClient,
    private spinner: SpinnerService,
  ) {
    this.fetchCartData();
  }

  get cartEntries(): CartEntryModel[] {
    return this._cartEntries;
  }

  get orderTotal(): number {
    return this._orderTotal;
  }

  get totalQuantity(): number {
    return this._totalQuantity;
  }

  isEmptyCart(): boolean {
    return this._cartEntries.length === 0;
  }

  addToCart(product: CartEntryModel) {
    const existInCart = this._cartEntries.some(currentEntry => {
      if (currentEntry.id === product.id) {
        currentEntry.quantity = product.quantity + currentEntry.quantity;
        currentEntry.totalPrice = currentEntry.quantity * currentEntry.price;

        return true;
      }
    });

    if (!existInCart) {
      product.totalPrice = product.quantity * product.price;
      this._cartEntries.push(product);
    }

    this.updateCartData();
  }

  updateEntryQuantity(entryID: string, newQTY: number) {
    if (!newQTY) {
      this.deleteEntry(entryID);
    } else if (newQTY > 0) {
      const updatedEntry = this._cartEntries[this.getEntryIndex(entryID)];
      updatedEntry.quantity = newQTY;
      updatedEntry.totalPrice = newQTY * updatedEntry.price;

      this.updateCartData();
    }
  }

  deleteEntry(entryID: string) {
    this._cartEntries.splice(this.getEntryIndex(entryID), 1);

    this.updateCartData();
  }

  removeAllProducts() {
    this._cartEntries.length = 0;
    this.updateCartData();
  }

  private fetchCartData() {
    this.spinner.show();
    this.http.get<CartDataModel>(this.constList.cartEntriesEndpoint)
      .toPromise()
      .then((response: CartDataModel) => {
        this._orderTotal = response.orderTotal;
        this._totalQuantity = response.totalQuantity;
        this._cartEntries = response.entries;
      })
      .finally(() => this.spinner.hide())
      .catch(this.handleError);
  }

  private recalculateOrderData() {
    this._orderTotal = 0;
    this._totalQuantity = 0;

    this._cartEntries.forEach((entry: CartEntryModel) => {
      this._totalQuantity += entry.quantity;
      this._orderTotal += entry.totalPrice;
    });
  }

  private updateCartData() {
    this.recalculateOrderData();

    const cartData: CartDataModel = {
      orderTotal: this._orderTotal,
      totalQuantity: this._totalQuantity,
      entries: this._cartEntries,
    };
    const ops = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    this.http.post(this.constList.cartEntriesEndpoint, JSON.stringify(cartData), ops)
      .toPromise()
      .catch(this.handleError);
  }

  private getEntryIndex(id: string): number {
    return this._cartEntries.findIndex(elem => elem.id === id);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
