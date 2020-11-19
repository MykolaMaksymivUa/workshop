import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { ProductListComponent, ProductDetailsComponent, ProductComponent } from './components';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
