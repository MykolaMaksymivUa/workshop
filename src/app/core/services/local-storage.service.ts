import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
  useValue: window.localStorage,
})
class LocalStorage {
  [name: string]: any;
  length: number;

  clear(): void {
  }

  getItem(key: string): any {
    return undefined;
  }

  removeItem(key: string): void {
    return undefined;
  }
  setItem(key: string, value: string): void {
    return undefined;
  }

}

@Injectable({
  providedIn: 'any',
})
export class LocalStorageService {
  length: number = this.ls.length;

  constructor(@Inject(LocalStorage) private ls: LocalStorage) {
  }

  setItem(key: string, value: object | string) {
    this.ls.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    this.ls.removeItem(key);
  }

  getItem(key: string) {
    if (!this.ls.hasOwnProperty(key)) {
      return undefined;
    }

    try {
      const stringElement = this.ls.getItem(key);
      if (stringElement) {
        return JSON.parse(stringElement);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
