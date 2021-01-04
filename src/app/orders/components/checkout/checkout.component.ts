import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CheckoutModel } from './../../models';
import { CartService } from './../../../cart/services/cart.service';
import { OrdersService } from '../../services';
import { validationMessageMap } from '../../shared/validation-message';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // checkoutData: CheckoutModel
  //   = new CheckoutModel('', '', '', '', '', '', false, 'Credit Card', '', this.cartService.cartEntries, this.cartService.orderTotal);
  checkoutForm: FormGroup;
  errorMessageList = {
    firstName: '',
    email: ''
  };
  countries: Array<string> = [
    'Ukraine',
    'Armenia',
    'Belarus',
    'Hungary',
    'Kazakhstan',
    'Poland',
    'Russia'
  ];

  constructor(
    public cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  get phones(): FormArray {
    return this.checkoutForm.get('phones') as FormArray;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSaveCheckoutForm() {
    this.ordersService.submitOrder({
      ...this.checkoutForm.value,
      cartEntries: this.cartService.cartEntries,
      orderTotal: this.cartService.orderTotal
    }).subscribe(
      () => {
        this.cartService.removeAllProducts();
        this.router.navigate(['/cart']);
      }
    );
  }

  onBlur(e) {
    const controlName = e.target.getAttribute('formControlName');
    this.setValidationMessage(this.checkoutForm.get(controlName), controlName);
  }

  onAddNewPhoneField() {
    this.phones.push(this.buildPhoneGroup());
  }

  onRemovePhoneField(index: number) {
    this.phones.removeAt(index);
  }

  buildForm() {
    this.checkoutForm = this.fb.group({
      firstName: this.fb.control('',
        {
          validators: [Validators.required, Validators.minLength(3)],
          updateOn: 'blur'
        }),
      lastName: '',
      email: this.fb.control('', {
        validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')],
        updateOn: 'blur',
      }),
      phones: this.fb.array([this.buildPhoneGroup()]),
      sendProducts: true,
      country: '',
      city: '',
      zip: '',
      addressLine1: '',
      addressLine2: '',
      paymentMethod: 'PayPal'
    });
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.errorMessageList[controlName] = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.errorMessageList[controlName] = Object.keys(c.errors)
        .map(key => validationMessageMap[controlName][key])
        .join('\r\n');
    }
  }

  private buildPhoneGroup(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }
}
