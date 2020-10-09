import { ProductModel } from './../../products/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class CartService {
  private cartEntries: ProductModel[] = [];

  constructor() { }

  addToCart(entry: ProductModel) {
    const existInCart = this.cartEntries.some(el => el.productSKU === entry.productSKU);
    if (!existInCart) {
      this.cartEntries.push(entry);
    }
    // if else -> change product quantity
  }

  getCartEntries() {
    return this.cartEntries;
  }
}
