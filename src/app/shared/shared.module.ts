import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective, ClickBoldTextDirective } from './directives';

@NgModule({
  declarations: [HighlightDirective, ClickBoldTextDirective],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    HighlightDirective,
    ClickBoldTextDirective
  ]
})
export class SharedModule { }
