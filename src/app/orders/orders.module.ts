import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CheckoutComponent, OrderHistoryComponent } from './components';
import { OrdersRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderHistoryComponent
  ],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
