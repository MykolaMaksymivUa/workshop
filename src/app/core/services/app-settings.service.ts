import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, share, retry, tap } from 'rxjs/operators';

import { LocalStorageService } from '.';
import { CONSTANT_CONFIG, Constants } from '../shared/constant.config';
import { AppSettingsModel } from './../models/app-settings.model';

const defaultSettings: AppSettingsModel = {
  JWTToken: 'empty',
  apiEndpoint: 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(
    @Inject(CONSTANT_CONFIG) private config: Constants,
    private ls: LocalStorageService,
    private http: HttpClient,
  ) { }

  loadSettings(): Observable<AppSettingsModel> {
    const settings = this.ls.getItem(this.config.settingsStorageKey);

    if (settings) {
      return of(settings);
    }

    return this.http.get<AppSettingsModel>(this.config.settingsEndpoint).pipe(
      retry(2),
      share(),
      tap((settings: AppSettingsModel) => this.ls.setItem(this.config.settingsStorageKey, settings)),
      catchError(() => of(defaultSettings))
    );
  }
}
