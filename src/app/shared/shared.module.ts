import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective, ClickBoldTextDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, ClickBoldTextDirective, OrderByPipe],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HighlightDirective,
    OrderByPipe,
    ClickBoldTextDirective
  ]
})
export class SharedModule { }
