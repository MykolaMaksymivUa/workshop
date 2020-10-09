import { Injectable } from '@angular/core';
import { ProductModel } from '../models';

@Injectable({
  providedIn: 'any'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModel[] {
    return [
      new ProductModel(
        '12344_1',
        'Perfect Empowered Drinking Water',
        'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
        48,
        'Sport',
        true
      ),
      new ProductModel(
        '12523', 'Artistry Studio™ Glittering Body Jelly',
        'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact.',
        13.80),
      new ProductModel(
        '12344_2',
        'Perfect Empowered Drinking Water',
        'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
        48,
        'Sport',
        true
      ),
      new ProductModel('16544_1', 'Artistry Studio™ Glittering Body Jelly',
        'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact. .',
        13.80),
      new ProductModel(
        '12344_1',
        'Perfect Empowered Drinking Water',
        'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
        48,
        'Sport',
        true
      ),
      new ProductModel(
        '12523', 'Artistry Studio™ Glittering Body Jelly',
        'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact.',
        13.80),
      new ProductModel(
        '12344_2',
        'Perfect Empowered Drinking Water',
        'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
        48,
        'Sport',
        true
      ),
      new ProductModel('16544_1', 'Artistry Studio™ Glittering Body Jelly',
        'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact. .',
        13.80)
    ];
  }
}
