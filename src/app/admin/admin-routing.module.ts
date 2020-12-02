import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards';
import { ProductEditResolveGuard } from './guards';
import { AdminComponent } from './admin.component';
import {
  AdminDashboardComponent,
  ManageOrdersComponent,
  ManageProductsComponent,
  ProductsFormComponent,
  ProductAddComponent,
  ProductEditComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'products',
            component: ManageProductsComponent,
            children: [
              {
                path: 'add',
                component: ProductAddComponent,

              },
              {
                path: 'edit/:productID',
                component: ProductEditComponent,
                resolve: {
                  productID: ProductEditResolveGuard
                }
              }
            ]
          },
          { path: 'orders', component: ManageOrdersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    AdminDashboardComponent,
    ProductAddComponent,
    ProductEditComponent
  ];
}
