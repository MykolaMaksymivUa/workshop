import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from './../../../products/models/product.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  @Input() product: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
