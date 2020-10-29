import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { constantsList, CONSTANT_CONFIG } from './shared/constant.config';

import { PathNotFoundComponent, FirstComponentComponent } from './components';
import { Config, configToken } from './shared/config.token';

const configValue: Config = {
  id: '2132131',
  locale: 'en'
};


@NgModule({
  declarations: [
    FirstComponentComponent,
    PathNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    { provide: configToken, useValue: configValue },
    { provide: CONSTANT_CONFIG, useValue: constantsList },
  ]
})
export class CoreModule { }
