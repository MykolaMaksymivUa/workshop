import { ProductModel } from 'src/app/products/models';
import { CartService } from './../../services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartEntries: ProductModel[];

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartEntries = this.cartService.cartEntries;
  }

  onUpdateQuantity(newEntry: { entryID: string, newQTY: number }) {
    this.cartService.updateEntryQuantity(newEntry.entryID, newEntry.newQTY);
  }

  onCartEntryDelete(entryID: string) {
    this.cartService.deleteEntry(entryID);
  }
}
