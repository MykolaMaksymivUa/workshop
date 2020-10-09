import { ProductModel } from 'src/app/products/models';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  // Change to CartEntryModel
  cartEntries: ProductModel[];

  constructor(
    private cartService: CartService,
  ) {
    this.cartEntries = this.cartService.getCartEntries();
  }

  ngOnInit(): void {
  }

}
