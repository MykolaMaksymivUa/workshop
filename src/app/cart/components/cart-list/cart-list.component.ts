import { CartService } from './../../services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartEntryModel } from '../../models';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  // @todo move to separate component
  sortingFields = {
    price: 'Price',
    totalPrice: 'Total Price',
    name: 'Name',
    quantity: 'Quantity',
  };
  selectedSortField: string = this.sortingFields.price;

  constructor(
    public cartService: CartService,
  ) {
  }

  ngOnInit(): void {
  }

  onUpdateQuantity(newEntry: { entryID: string, newQTY: number }) {
    this.cartService.updateEntryQuantity(newEntry.entryID, newEntry.newQTY);
  }

  onCartEntryDelete(entryID: string) {
    this.cartService.deleteEntry(entryID);
  }
}
