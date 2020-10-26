import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any' // почему any?
})
export class RandomImageService {
  constructor() { }
  private apiSrc = 'https://picsum.photos/id/';

  generateRandomImage(min: number = 100, max: number = 200, size: number = 200) {
    return `${this.apiSrc}/${(Math.random() * (max - min) + min).toFixed()}/${size}`;
  }
}
