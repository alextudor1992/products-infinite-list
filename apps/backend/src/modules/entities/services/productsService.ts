import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument, ProductModel } from '../models/productModel';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(ProductModel.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async createProducts(products: ProductModel[]) {
    return this.productModel.insertMany(products);
  }

  async getProducts(batch: number, size: number) {
    return this.productModel
      .find()
      .limit(size)
      .skip(batch * size);
  }
}
