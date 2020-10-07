export class ProductModel {
  constructor(
    public productSKU: string,
    public name: string,
    public description: string,
    public price?: number,
    public categoryType?: string,
    public isAvailable?: boolean,
  ) {
    this.isAvailable = isAvailable || false;
    this.categoryType = categoryType || 'Empty';
    this.price = price || 0;
  }
}
