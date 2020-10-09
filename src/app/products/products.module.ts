import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class ProductsModule { }
