import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { UserProductsModule } from './user-products/user-products.module';

@Module({
  imports: [DatabaseModule, ProductsModule, UserProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
