import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { OrdersService } from './../../services';
import { OrderModel } from '../../models';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  orders: OrderModel[];
  private sub: Subscription;

  tableColumnsList: string[] = [
    'customerName',
    'total',
    'paymentMethod',
    'orderDate',
    'shippingAddress'
  ];

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.sub = this.ordersService.getOrderList()
      .subscribe((orderList: OrderModel[]) => this.orders = orderList);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
