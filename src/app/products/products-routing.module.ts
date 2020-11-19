import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent, ProductDetailsComponent } from './components';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'product-details/:productID',
        component: ProductDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
