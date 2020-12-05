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

  // лучше сделать этот компонент презентационным, тоесть без зависимостей.
  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  onAddToCart(qty: number) {
    this.addToCart.emit({ quantity: qty, ...this.product });
  }

}
