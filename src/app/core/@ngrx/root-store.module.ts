import { ProductsModule } from './../../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,      // default value is true
        strictActionImmutability: true,     // default value is true
        strictStateSerializability: true,   // default value is false
        strictActionSerializability: true,  // default value is false
        strictActionWithinNgZone: true,     // default value is false
        strictActionTypeUniqueness: true    // default value is false
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ProductsModule
  ]
})
export class RootStoreModule { }
