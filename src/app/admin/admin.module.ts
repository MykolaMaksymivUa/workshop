import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ProductsFormComponent } from './components';


@NgModule({
  declarations: [
    ProductsFormComponent,
    AdminRoutingModule.components
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
