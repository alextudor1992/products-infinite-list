import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product as BaseProduct } from 'defs';

@ObjectType()
export class Product implements BaseProduct {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  sku: string;

  @Field()
  brand: string;
}
