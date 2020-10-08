import { CartService } from './../../../cart/services/cart.service';
import { ProductModel } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  // лучше сделать этот компонент презентационным, тоесть без зависимостей.
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  onAddToCart(e) {
    console.log(`${this.product.name} successfully added to your cart!`);
    this.cartService.addToCart(this.product);
  }

}
