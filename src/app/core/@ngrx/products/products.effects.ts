import { ProductsService } from './../../../products/services/products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, EffectNotification, OnInitEffects, OnRunEffects, ofType } from '@ngrx/effects';
import * as ProductActions from './products.actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/products/models';

@Injectable()
export class ProductsEffects implements OnRunEffects, OnInitEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return resolvedEffects$;
  }

  ngrxOnInitEffects(): Action {
    return { type: '[ProductsEffects]: Init' };
  }

  getProducts$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(action => {
        return this.productService.getProducts()
          .pipe(
            map((products: Product[]) => ProductActions.loadProductsSuccess({ products })),
            catchError(error => of(ProductActions.loadProductsError({ error })))
          );
      })
    );
  });
}
