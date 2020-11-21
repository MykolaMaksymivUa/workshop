import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class SpinnerService {
  private visible = false;

  isVisible(): boolean {
    return this.visible;
  }

  hide(): void {
    this.visible = false;
  }

  show(): void {
    this.visible = true;
  }
}
