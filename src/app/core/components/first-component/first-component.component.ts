import { Component, Inject, OnInit, Optional, AfterViewInit } from '@angular/core';

import { GeneratorFactory, generatorFactory10 } from '../../services/generator.factory';
import { ConfigOptionsService, GeneratorService } from './../../services';
import { CONSTANT_CONFIG, Constants } from '../../shared/constant.config';

// move into models
export enum ProductCategories {
  HealthCare = 'Health Care',
  Sport = 'Sports Nutrition',
  BodyDetox = 'Body Detox',
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [
    GeneratorService,
    // логично, так как данный токен внедряется в сервис, а значит он должен быть глобально видимый
    // not working, need to provide in module.
    // { provide: configToken, useValue: configValue },
    { provide: generatorFactory10, useFactory: GeneratorFactory(10), deps: [GeneratorService] }
  ]
})
export class FirstComponentComponent implements OnInit, AfterViewInit {
  name: string;
  description: string;
  price: number;
  categoryList = ProductCategories;
  isAvailable: boolean;
  categoryType: string;

  constructor(
    @Optional() public configService: ConfigOptionsService,
    @Optional() @Inject(generatorFactory10) public gFactory10: string,
    @Optional() @Inject(CONSTANT_CONFIG) public constList: Constants,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  ngAfterViewInit(): void {
  }

  getProduct() {
    this.name = 'Perfect Empowered Drinking Water';
    this.description = 'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.';
    this.price = 48;
    this.categoryType = 'Sport';
    this.isAvailable = true;
  }

}
