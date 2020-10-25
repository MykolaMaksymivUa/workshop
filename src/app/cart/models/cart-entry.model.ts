import { ProductModel } from 'src/app/products/models';

export interface CartEntryModel extends ProductModel {
  quantity: number;
  totalPrice?: number;
}
