import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent, FirstComponentComponent, LoginComponent } from './core/components';
import { AuthGuard } from './core/guards';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product-list'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    data: { title: 'Admin' },
  },
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
