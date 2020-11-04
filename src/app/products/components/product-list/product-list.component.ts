import { CartEntryModel } from './../../../cart/models/cart-entry.model';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services';
import { ProductModel } from '../../models';
import { CartService } from './../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    public productService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  onAddToCart(product: CartEntryModel) {
    this.cartService.addToCart(product);
  }

}
