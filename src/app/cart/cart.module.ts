import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartEntryComponent } from './components/cart-entry/cart-entry.component';


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartEntryComponent
  ],
  imports: [
    CommonModule,
    // For future implementation
    // CartRoutingModule
  ],

})
export class CartModule { }
