import { select, Store } from '@ngrx/store';
import * as ProductActions from './../../core/@ngrx/products/products.actions';

import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';
import { selectProductsLoaded } from 'src/app/core/@ngrx';

export function checkStore(store: Store): Observable<boolean> {
  return store.pipe(
    select(selectProductsLoaded),
    tap((loaded: boolean) => {

      if (!loaded) {
        store.dispatch(ProductActions.loadProducts());
      }
    }),
    filter((loaded: boolean) => loaded),
    // automatically unsubscribe
    take(1)
  );
}
