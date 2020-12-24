import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, ProductModel } from '../../models';
import { CartService } from './../../../cart/services/cart.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { AppState, selectProductByUrl } from 'src/app/core/@ngrx';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: ProductModel;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(
        select(selectProductByUrl),
        // catchError(e => new throwError()),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe((product: Product) => {
        if (product) {
          this.product = { ...product };
        } else {
          this.store.dispatch(RouterActions.goHome());
        }
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  onAddToCart(qty: number) {
    this.cartService.addToCart({ quantity: qty, ...this.product });
  }

}
