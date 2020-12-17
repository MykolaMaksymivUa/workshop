import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { checkStore } from './check-store.function';

@Injectable({
  providedIn: 'root'
})
export class ProductsStatePreloadingGuard implements CanActivate {
  constructor(private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return checkStore(this.store).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );

  }

}
