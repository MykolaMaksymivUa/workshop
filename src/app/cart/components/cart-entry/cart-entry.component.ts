import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models';

@Component({
  selector: 'app-cart-entry',
  templateUrl: './cart-entry.component.html',
  styleUrls: ['./cart-entry.component.css']
})
export class CartEntryComponent implements OnInit {
  @Input() cartEntry: ProductModel;
  constructor() { }

  ngOnInit(): void {
    debugger;
    console.log(this.cartEntry);
  }

}
