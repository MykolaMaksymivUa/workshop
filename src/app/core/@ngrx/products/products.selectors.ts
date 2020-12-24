import { ProductModel } from './../../../products/models/product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouterState } from './../router/router.selectors';

import { ProductsState } from './products.state';
import { of } from 'rxjs';

const selectEntities = (state: ProductsState) => state.entities;
const selectLoaded = (state: ProductsState) => state.loaded;
const selectLoading = (state: ProductsState) => state.loading;
const selectError = (state: ProductsState) => state.error;

export const selectProductsState = createFeatureSelector<AppState, ProductsState>('products');

export const selectProductsEntities = createSelector(
  selectProductsState,
  selectEntities
);

export const selectProductsLoaded = createSelector(
  selectProductsState,
  selectLoaded
);
export const selectProductsLoading = createSelector(
  selectProductsState,
  selectLoading
);
export const selectProductsError = createSelector(
  selectProductsState,
  selectError
);

export const selectProducts = createSelector(
  selectProductsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[+id]);
  }
);

export const selectProductByUrl = createSelector(
  selectProducts,
  selectRouterState,
  (products, router) => {
    const productID = router.state.params.productID;
    if (productID && Array.isArray(products)) {
      return products.find(product => product.id === productID);
    } else {
      return of(null);
    }
  }
);
