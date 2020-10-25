import { CartEntryModel } from './../../../cart/models/cart-entry.model';
import { ProductModel } from './../../models/product.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() addToCart = new EventEmitter<CartEntryModel>();

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  onAddToCart(qty: number) {
    console.log(`${this.product.name} successfully added to your cart!`);
    this.addToCart.emit({ quantity: qty, ...this.product });
  }

}
