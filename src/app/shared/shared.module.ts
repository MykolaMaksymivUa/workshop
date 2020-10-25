import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives';

@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    HighlightDirective
  ]
})
export class SharedModule { }
