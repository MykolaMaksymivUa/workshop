import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { ProductsService } from './../../products/services/products.service';
import { ProductModel } from './../../products/models';

import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class ProductEditResolveGuard implements Resolve<ProductModel> {
  constructor(
    private router: Router,
    private productService: ProductsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : ProductModel
    | Observable<ProductModel>
    | Promise<ProductModel>
    | null {
    const productID = route.paramMap.get('productID');

    return this.productService.getProduct(productID).pipe(
      map((product: ProductModel) => {

        if (product) {
          return product;
        } else {
          // absolute path, on refresh -> check login and path equal /login
          // navigate to add products
          this.router.navigate(['admin/products/add']);

          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/admin']);

        return of(null);
      })
    );
  }
}
