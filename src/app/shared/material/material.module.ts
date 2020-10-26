import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';


const materialModules = [
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Необязательно сюда импортировать, если тут нет компонент, которые используют эти модули
    // ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
