import { Inject, Injectable } from '@angular/core';
import { Config, configToken } from './../shared/config.token';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  constructor(@Inject(configToken) private config: Config) { }

  setConfig(cfg: Config) {
    Object.assign(this.config, cfg);
  }

  getConfig(): Config {
    return this.config;
  }
}
