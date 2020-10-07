import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';


const routes: Routes = [
  {
    path: 'cart',
    // loadChildren: () => CartModule,
    component: CartComponent
  },
  {
    path: '',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
