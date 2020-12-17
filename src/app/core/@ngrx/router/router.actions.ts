import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const forward = createAction('[Router] FORWARD');
export const back = createAction('[Router] BACK');
export const go = createAction(
  '[Router] GO',
  props<{ path: any[]; queryParams?: object; extras?: NavigationExtras }>()
);
export const goHome = createAction(
  '[Router] GO HOME',
);
