import { CartEntryModel } from './../../../cart/models/cart-entry.model';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services';
import { CartService } from './../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  breakpoint: number = 4;

  constructor(
    public productService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.onResize();
  }

  onAddToCart(product: CartEntryModel) {
    this.cartService.addToCart(product);
  }

  onResize() {
    const innerWidth = window.innerWidth;

    if (innerWidth <= 578) {
      this.breakpoint = 1;
    } else if (innerWidth > 578 && innerWidth <= 1280) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 4;
    }
  }

}
