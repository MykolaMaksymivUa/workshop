import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';

@Directive({
  selector: '[appAsyncEmailValidator][formControlName], [appAsyncEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncEmailValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncEmailValidatorDirective implements Validator {

  validate(c: AbstractControl): Observable<{ [key: string]: any }> {
    return this.validateEmail(c.value)
      .pipe(
        distinctUntilChanged(),
        take(1)
      );
  }

  private validateEmail(email: string) {
    return new Observable(observer => {
      if (/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email)) {
        observer.next(null);
      } else {
        observer.next({ asyncEmailInvalid: true });
      }
    });
  }
}
