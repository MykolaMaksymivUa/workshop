export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc?: string;
  categoryType?: string;
  isAvailable?: boolean;
}
export class ProductModel implements Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public imageSrc?: string,
    public categoryType?: string,
    public isAvailable?: boolean,
  ) {
    this.isAvailable = isAvailable || false;
    this.categoryType = categoryType || 'Empty';
    this.price = price || 0;
  }
}
