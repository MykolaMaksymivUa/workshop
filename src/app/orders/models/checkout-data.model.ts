import { CartEntryModel } from '../../cart/models/cart-entry.model';

export class CheckoutModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public addressLine1: string,
    public country: string,
    public zip: string,
    public isSendProducts: boolean,
    public paymentMethod: 'PayPal' | 'Debit Card' | 'Credit Card',
    public cartEntries: CartEntryModel[],
    public orderTotal: number,
    public phones: Array<{ phone: string }>,
    // optional fields
    public addressLine2?: string,
  ) { }
}
