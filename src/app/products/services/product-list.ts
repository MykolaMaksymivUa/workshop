import { ProductModel } from '../models';
import { RandomImageService } from './../../shared/services';

const imageService = new RandomImageService();

export const productMockList: ProductModel[] = [
  new ProductModel(
    '12344_1',
    'Perfect Empowered Drinking Water',
    'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
    48,
    imageService.generateRandomImage(),
    'Sport',
    true
  ),
  new ProductModel(
    '12523', 'Artistry Studio™ Glittering Body Jelly',
    'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact.',
    13.80,
    imageService.generateRandomImage(),
    'Body Key',
    true,
  ),
  new ProductModel(
    '12344_2',
    'Perfect Empowered Drinking Water',
    'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
    48,
    imageService.generateRandomImage(),
    'Sport',
    true
  ),
  new ProductModel('16544_1', 'Artistry Studio™ Glittering Body Jelly',
    'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact. .',
    233.34),
  new ProductModel(
    '12344_1',
    'Perfect Empowered Drinking Water',
    'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.',
    48,
    imageService.generateRandomImage(),
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
    imageService.generateRandomImage(),
    'Sport',
    true
  ),
  new ProductModel('16544_1', 'Artistry Studio™ Glittering Body Jelly',
    'Artistry Studio™ Glittering Body Jelly feels cool and refreshing to your skin on contact. .',
    13.80,
    imageService.generateRandomImage())
];
