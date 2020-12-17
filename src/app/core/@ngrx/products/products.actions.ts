import { createAction, props } from '@ngrx/store';

import { Product } from './../../../products/models';

export const loadProducts = createAction('[Product List Page (App)] GET_PRODUCTS');
export const loadProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCESS',
  props<{ products: Product[] }>()
);
export const loadProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string }>()
);

// export const getProduct = createAction(
//   '[Product Details Page] GET_PRODUCT',
//   props<{ product: Product }>()
// );
// export const getProductSuccess = createAction(
//   '[Get Products Effect] GET_PRODUCT_SUCCESS',
//   props<{ products: Product }>()
// );
// export const getProductError = createAction(
//   '[Get Products Effect] GET_PRODUCT_ERROR',
//   props<{ error: Error | string }>()
// );
