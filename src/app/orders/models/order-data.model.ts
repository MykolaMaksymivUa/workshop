import { CheckoutModel } from './checkout-data.model';

export interface OrderModel extends CheckoutModel {
  orderDate: Date;
}
