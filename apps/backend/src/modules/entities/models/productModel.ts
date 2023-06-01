import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'defs';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ProductModel implements Omit<Product, '_id'> {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop({ unique: true })
  sku: string;

  @Prop()
  brand: string;
}

export type ProductDocument = ProductModel & Document;
export const ProductSchema = SchemaFactory.createForClass(ProductModel);
