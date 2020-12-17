import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent, ProductDetailsComponent } from './components';
import { ProductExistsGuard, ProductsStatePreloadingGuard } from './guards';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
        canActivate: [ProductsStatePreloadingGuard]
      },
      {
        path: 'product-details/:productID',
        component: ProductDetailsComponent,
        canActivate: [ProductExistsGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
