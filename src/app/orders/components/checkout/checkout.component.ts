import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CheckoutModel } from './../../models';
import { CartService } from './../../../cart/services/cart.service';
import { OrdersService } from '../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutData: CheckoutModel = new CheckoutModel('', '', '', '', '', '', false, 'Credit Card', '', this.cartService.cartEntries, this.cartService.orderTotal);

  constructor(
    public cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSaveCheckoutForm(e) {
    this.ordersService.submitOrder(this.checkoutData);
    //on success
    this.router.navigate(['/cart']);
  }
}
