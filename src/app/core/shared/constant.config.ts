import { InjectionToken } from '@angular/core';

export const CONSTANT_CONFIG = new InjectionToken<Constants>('constant list', {
  providedIn: 'any',
  factory: () => constantsList,
});

export interface Constants {
  productListEndpoint: string;
  cartEntriesEndpoint: string;
  ordersEndpoint: string;
  settingsEndpoint: string;
  settingsStorageKey: string;
}

export const constantsList: Constants = {
  productListEndpoint: 'http://localhost:3000/products',
  cartEntriesEndpoint: 'http://localhost:3000/cartData',
  ordersEndpoint: 'http://localhost:3000/orders',
  settingsEndpoint: 'http://localhost:4000/settings',
  settingsStorageKey: 'appSettings',
};
