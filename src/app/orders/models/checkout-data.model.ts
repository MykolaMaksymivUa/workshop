import { CartEntryModel } from '../../cart/models/cart-entry.model';

export class CheckoutModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public addressLine1: string,
    public country: string,
    public zip: string,
    public isShippingAddressSame: boolean,
    public paymentMethod: 'PayPal' | 'Debit Card' | 'Credit Card',
    public cardName: string,
    public cartEntries: CartEntryModel[],
    public orderTotal: number,
    //optional fields
    public addressLine2?: string,
  ) { }
}
