import { ProductModel } from 'src/app/products/models';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../products/services/products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
