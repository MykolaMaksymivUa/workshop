import { Product, ProductModel } from 'src/app/products/models';

export interface ProductsState {
  entities: ReadonlyArray<Product>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
  entities: [
    new ProductModel('1', 'Meow', 'asdsad', 120)
  ],
  loading: false,
  loaded: false,
  error: null,
};
