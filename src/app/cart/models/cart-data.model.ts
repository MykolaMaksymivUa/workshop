import { CartEntryModel } from '.';

export interface CartDataModel {
  orderTotal: number;
  totalQuantity: number;
  entries: CartEntryModel[];
}
