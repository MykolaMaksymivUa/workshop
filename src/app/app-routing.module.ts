import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent, FirstComponentComponent } from './core/components';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product-list'
  },
  // {
  //   path: 'cart',
  //   // loadChildren: () => CartModule,
  //   component: CartComponent
  // },
  {
    path: 'test-page',
    component: FirstComponentComponent,
    data: {
      title: 'Test Page'
    }
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
