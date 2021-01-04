import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective, ClickBoldTextDirective, AsyncEmailValidatorDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, ClickBoldTextDirective, OrderByPipe, AsyncEmailValidatorDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HighlightDirective,
    OrderByPipe,
    ClickBoldTextDirective,
    AsyncEmailValidatorDirective
  ]
})
export class SharedModule { }
