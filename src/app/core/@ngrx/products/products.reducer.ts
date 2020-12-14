import { Action, createReducer, on } from '@ngrx/store';

import { initialProductsState, ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const reducer = createReducer(
  initialProductsState,

  on(ProductsActions.loadProducts, (state, props) => {
    console.log('INIT');
    console.log(props);
    return {
      ...state,
      loading: true
    };
  }),


);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
