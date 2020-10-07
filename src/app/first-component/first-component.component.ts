import { Component, OnInit } from '@angular/core';

// move into models
export enum ProductCategories {
  HealthCare = 'Health Care',
  Sport = 'Sports Nutrition',
  BodyDetox = 'Body Detox',
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  categoryList = ProductCategories;
  isAvailable: boolean;
  categoryType: string;

  constructor() { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.name = 'Perfect Empowered Drinking Water';
    this.description = 'A refreshing drinking water infused with MBO®*, a proprietary process that stabilizes oxygen in the water.';
    this.price = 48;
    this.categoryType = 'Sport';
    this.isAvailable = true;
  }

}
