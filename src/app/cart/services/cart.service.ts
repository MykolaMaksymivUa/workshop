import { Injectable } from '@angular/core';
import { CartEntryModel } from './../models/cart-entry.model';

@Injectable({
  providedIn: 'any'
})
export class CartService {
  private _orderTotal = 0;
  private SESSION_ID = 'cartEntries';
  private _cartEntries: CartEntryModel[] = JSON.parse(localStorage.getItem(this.SESSION_ID)) || [];

  constructor() { }

  get cartEntries() {
    return this._cartEntries;
  }

  get orderTotal() {
    this.calculateOrderTotal();

    return this._orderTotal;
  }

  private saveToSession() {
    localStorage.setItem(this.SESSION_ID, JSON.stringify(this._cartEntries));
  }

  private calculateOrderTotal() {
    this._orderTotal = this._cartEntries.reduce((acc: number, entry: CartEntryModel) => acc + entry.totalPrice, 0);
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

    this.saveToSession();
  }

  updateEntryQuantity(entryID: string, newQTY: number) {
    if (!newQTY) {
      this.deleteEntry(entryID);
    } else if (newQTY > 0) {
      const updatedEntry = this._cartEntries[this.getEntryIndex(entryID)];
      updatedEntry.quantity = newQTY;
      updatedEntry.totalPrice = newQTY * updatedEntry.price;

      this.saveToSession();
    }

  }

  deleteEntry(entryID: string) {
    this._cartEntries.splice(this.getEntryIndex(entryID), 1);

    this.saveToSession();
  }
}
