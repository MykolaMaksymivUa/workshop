import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './../core/core.module';
import { CartComponent } from './cart.component';
import { CartListComponent, CartEntryComponent } from './components';
import { SharedModule } from './../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';


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
    CartRoutingModule
  ],
  providers: [
  ]

})
export class CartModule { }
