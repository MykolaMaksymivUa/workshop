import { Injectable } from '@angular/core';

import { CheckoutModel, OrderModel } from './../models';
import { CartService } from './../../cart/services/cart.service';
import { LocalStorageService } from './../../core/services';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orderList: OrderModel[];
  private readonly orderStorageKey: string = 'orders';

  constructor(
    private lsService: LocalStorageService,
    private cartService: CartService
  ) {
    this.orderList = this.lsService.getItem(this.orderStorageKey) || [];
  }

  submitOrder(checkoutData: CheckoutModel) {
    this.orderList.push({ ...checkoutData, orderDate: new Date() });

    this.lsService.setItem(this.orderStorageKey, this.orderList);
    this.cartService.removeAllProducts();
  }

  getOrderList(): OrderModel[] {
    return this.orderList;
  }
}
