import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CartEntryModel } from './../../models';

@Component({
  selector: 'app-cart-entry',
  templateUrl: './cart-entry.component.html',
  styleUrls: ['./cart-entry.component.css'],
})
export class CartEntryComponent implements OnInit {
  @Input() cartEntry: CartEntryModel;

  @Output() cartEntryDelete = new EventEmitter<string>();
  @Output() updateQuantity = new EventEmitter<{
    entryID: string,
    newQTY: number
  }>();
  constructor() { }

  ngOnInit(): void {
  }

  onCartEntryDelete(entryID: string) {
    this.cartEntryDelete.emit(entryID);
  }

  onUpdateQuantity(entryID: string, newQTY: number) {
    this.updateQuantity.emit({
      entryID,
      newQTY,
    });
  }

}
