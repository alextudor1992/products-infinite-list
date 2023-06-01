import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import csv from 'csv';
import slug from 'slug';
import { importedProductSchema } from 'defs';
import { ProductModel } from '../../entities/models/productModel';
import { ProductsService } from '../../entities/services/productsService';

@Injectable()
export class ProductsIngester {
  private readonly productsListUrl: string;

  constructor(
    configService: ConfigService,
    private readonly productsService: ProductsService,
  ) {
    this.productsListUrl = configService.getOrThrow('PRODUCTS_LIST_URL');
  }

  async importProducts() {
    const content = await this.fetchProductsList();

    if (content) {
      const products: ProductModel[] = [];
      csv.parse(content).pipe(
        csv.transform((record) => {
          const product = this.processRecord(record);
          if (product) {
            products.push(product);
          }
        }),
      );

      if (products.length) {
        return this.productsService.createProducts(products);
      }
    }
  }

  private processRecord(record: unknown) {
    const productInfo = this.isProductInfoValid(record);

    if (productInfo) {
      const [name, brand, sku] = productInfo;
      return this.createModel(name, sku, brand);
    }
  }

  private isProductInfoValid(productInfo: unknown) {
    const parseResult = importedProductSchema.safeParse(productInfo);
    return parseResult.success ? parseResult.data : null;
  }

  private async fetchProductsList() {
    const response = await fetch(this.productsListUrl);

    if (response.ok) {
      const content = await response.text();

      if (content.length) {
        return content;
      }
    }
  }

  private createModel(name: string, sku: string, brand: string) {
    const product = new ProductModel();
    product.name = name;
    product.sku = sku;
    product.brand = brand;
    product.slug = slug(name);
    return product;
  }
}
