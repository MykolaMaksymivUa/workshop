import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../models';
import { ProductsService } from './../../services';
import { CartService } from './../../../cart/services/cart.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: ProductModel;
  private sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    const urlID = this.activatedRoute.snapshot.params.productID;
    this.sub = this.productsService.getProduct(urlID)
      .subscribe(
        (product: ProductModel) => {
          if (product) {
            this.product = product;
          } else {
            this.router.navigate(['/not-found-page']);
          }
        },
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onAddToCart(qty: number) {
    this.cartService.addToCart({ quantity: qty, ...this.product });
  }

}
