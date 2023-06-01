import { Module } from '@nestjs/common';
import { EntitiesModule } from '../entities/entitiesModule';
import { ProductsIngester } from './services/productsIngester';

@Module({
  imports: [EntitiesModule],
  providers: [ProductsIngester],
  exports: [ProductsIngester],
})
export class IngesterModule {}
