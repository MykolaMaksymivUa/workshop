import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(n: number): string {
    return [...Array(n)].map(i => (~~(Math.random() * 36)).toString(36)).join('');
  }
}
