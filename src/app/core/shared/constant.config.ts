import { InjectionToken } from '@angular/core';

export const CONSTANT_CONFIG = new InjectionToken<Constants>('constant list');

export interface Constants {
  cartEntriesStorageKey: string;
  productListEndpoint: string;
  cartEntriesEndpoint: string;
}

export const constantsList: Constants = {
  cartEntriesStorageKey: 'cartEntries',
  productListEndpoint: '/products',
  cartEntriesEndpoint: '/cart/entries',
};
