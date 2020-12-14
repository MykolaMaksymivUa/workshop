import { Observable } from 'rxjs';
import { CartEntryModel } from './../../../cart/models/cart-entry.model';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services';
import { CartService } from './../../../cart/services/cart.service';
import { ProductModel } from '../../models';

import { AppState, ProductsState } from 'src/app/core/@ngrx';
import { select, Store } from '@ngrx/store';
import * as ProductsActions from '../../../core/@ngrx/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  breakpoint = 4;
  products$: Observable<ProductModel[]>;

  constructor(
    public productService: ProductsService,
    private cartService: CartService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.subscribe((data) => console.log(data));
    // this.store.dispatch(ProductsActions.loadProducts());
    this.products$ = this.productService.getProducts();
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
