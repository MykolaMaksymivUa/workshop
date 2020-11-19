import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent, OrderHistoryComponent } from './components';


const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent
  },

  {
    path: 'order-history',
    component: OrderHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
