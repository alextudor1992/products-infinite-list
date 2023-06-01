import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './models/productModel';
import { ProductsService } from './services/productsService';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductModel.name, schema: ProductSchema },
    ]),
  ],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class EntitiesModule {}
