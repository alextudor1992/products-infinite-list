import { Module } from '@nestjs/common'
import { EntitiesModule } from "../entities/entitiesModule";
import { IngesterModule } from "../ingester/ingesterModule";

@Module({
  imports: [EntitiesModule, IngesterModule],
  providers: [],
})
export class ApiModule {}