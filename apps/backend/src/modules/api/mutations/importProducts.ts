import { Mutation, Resolver } from '@nestjs/graphql';
import { ProductsIngester } from '../../ingester/services/productsIngester';
import { Product } from '../types/product';

@Resolver(() => Product)
export class ImportProducts {
  constructor(private readonly productsIngester: ProductsIngester) {}

  @Mutation()
  async importProducts() {
    return this.productsIngester.importProducts();
  }
}
