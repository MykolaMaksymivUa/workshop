import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

// ngrx
import { Store, select } from '@ngrx/store';
import * as RouterActions from '../../core/@ngrx/router/router.actions';
import { selectProducts, selectProductsEntities } from './../../core/@ngrx/products/products.selectors';

// rxjs
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { checkStore } from './check-store.function';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductExistsGuard implements CanActivate {
  constructor(private store: Store) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        const id = route.paramMap.get('productID');
        return this.hasTask(id);
      })
    );
  }

  private hasTask(id: string): Observable<boolean> {
    return this.store.pipe(
      select(selectProducts),
      map(products => !!products.find((product: Product) => product.id === id)),

      // make a side effect
      tap((result: boolean) => {
        if (!result) {
          this.store.dispatch(RouterActions.goHome());
        }
      }),

      // automatically unsubscribe
      take(1)
    );
  }
}
