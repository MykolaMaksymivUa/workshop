import { ProductModel } from 'src/app/products/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  newProduct = new ProductModel('', '', '', 0);

  constructor() { }

  ngOnInit(): void {
  }

}
