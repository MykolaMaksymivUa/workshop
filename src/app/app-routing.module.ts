import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PathNotFoundComponent, FirstComponentComponent } from './core/components';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    // loadChildren: () => CartModule,
    component: CartComponent
  },
  {
    path: 'test-page',
    component: FirstComponentComponent,
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
