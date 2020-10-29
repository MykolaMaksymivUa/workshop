import { InjectionToken } from '@angular/core';
import { GeneratorService } from '.';

export const generatorFactory10 = new InjectionToken<string>('Generator Factory 10 length');

export function GeneratorFactory(take: number) {
  return (data: GeneratorService): string =>
    data
      .generate(take)
      .split('')
      .reverse()
      .join('');
}
