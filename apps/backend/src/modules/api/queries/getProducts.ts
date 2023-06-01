import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../types/product';

@ArgsType()
class Params {
  @Field()
  readonly batch: number;

  @Field()
  readonly size: number;
}

@Resolver(() => Product)
export class GetProducts {
  constructor(private readonly data) {}

  @Query(() => [Product])
  async getProducts(@Args() { batch, size }: Params): Promise<Product[]> {
    return [];
  }
}
