import { Action, createReducer, on } from '@ngrx/store';

import { initialProductsState, ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const reducer = createReducer(
  initialProductsState,

  on(ProductsActions.loadProducts, (state, props) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(ProductsActions.loadProductsSuccess, (state, { products }) => {
    const entities = { ...products };

    return {
      ...state,
      loading: false,
      loaded: true,
      entities
    }
  }),

  on(ProductsActions.loadProductsError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),

);


export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
