import { Component, OnInit } from '@angular/core';

import { OrdersService } from './../../services';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  tableColumnsList: string[] = [
    'customerName',
    'total',
    'paymentMethod',
    'orderDate',
    'shippingAddress'
  ];

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

}
