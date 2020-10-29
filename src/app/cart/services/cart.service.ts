import { Constants, CONSTANT_CONFIG } from './../../core/shared/constant.config';
import { Inject, Injectable } from '@angular/core';
import { CartEntryModel } from './../models/cart-entry.model';
import { LocalStorageService } from './../../core/services';


@Injectable({
  providedIn: 'any'
})
export class CartService {
  private _orderTotal = 0;
  private _totalQuantity = 0;
  private _cartEntries: CartEntryModel[] = this.storage.getItem(this.constList.cartEntriesStorageKey) || [];

  constructor(
    @Inject(CONSTANT_CONFIG) private constList: Constants,
    private storage: LocalStorageService
  ) {
    this.updateCartData();
  }

  get cartEntries() {
    return this._cartEntries;
  }

  get orderTotal(): number {
    return this._orderTotal;
  }

  get totalQuantity(): number {
    return this._totalQuantity;
  }

  private updateCartData() {
    this._orderTotal = 0;
    this._totalQuantity = 0;

    this._cartEntries.forEach((entry: CartEntryModel) => {
      this._totalQuantity += entry.quantity;
      this._orderTotal += entry.totalPrice;
    });

    this.saveToSession();
  }

  private saveToSession() {
    this.storage.setItem(this.constList.cartEntriesStorageKey, this._cartEntries);
  }

  private getEntryIndex(id: string): number {
    return this._cartEntries.findIndex(elem => elem.productSKU === id);
  }

  isEmptyCart(): boolean {
    return this._cartEntries.length === 0;
  }

  addToCart(product: CartEntryModel) {
    const existInCart = this._cartEntries.some(currentEntry => {
      if (currentEntry.productSKU === product.productSKU) {
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
}
