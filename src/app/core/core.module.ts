import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { constantsList, CONSTANT_CONFIG } from './shared/constant.config';
import { PathNotFoundComponent, FirstComponentComponent, HeaderComponent, LoginComponent } from './components';
import { Config, configToken } from './shared/config.token';
import { SpinnerComponent } from './widgets';

const configValue: Config = {
  id: '2132131',
  locale: 'en'
};


@NgModule({
  declarations: [
    FirstComponentComponent,
    PathNotFoundComponent,
    HeaderComponent,
    SpinnerComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    { provide: configToken, useValue: configValue },
    // { provide: CONSTANT_CONFIG, useValue: constantsList },
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
  ]
})
export class CoreModule { }
