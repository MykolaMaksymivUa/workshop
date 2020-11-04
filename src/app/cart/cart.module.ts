import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartEntryComponent } from './components/cart-entry/cart-entry.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartEntryComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CoreModule,
    // For future implementation
    // CartRoutingModule
  ],
  providers: [
  ]

})
export class CartModule { }
