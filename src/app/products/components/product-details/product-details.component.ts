import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductModel } from '../../models';
import { ProductsService } from './../../services';
import { CartService } from './../../../cart/services/cart.service';

import { Subject, Subscription, throwError } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';

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
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private store: Store<AppState>,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    // const urlID = this.activatedRoute.snapshot.params.productID;
    // this.sub = this.productsService.getProduct(urlID)
    //   .subscribe(
    //     (product: ProductModel) => {
    //       if (product) {
    //         this.product = product;
    //       } else {
    //         this.router.navigate(['/not-found-page']);
    //       }
    //     },
    //   );
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
