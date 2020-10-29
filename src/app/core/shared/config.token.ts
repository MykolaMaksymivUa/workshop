import { InjectionToken } from '@angular/core';

export interface Config {
  id?: string;
  login?: string;
  locale?: string;
  email?: string;
  timestamp?: Date;
}

export const configToken = new InjectionToken<Config>('config token');
