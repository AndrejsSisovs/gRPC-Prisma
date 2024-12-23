import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { DatabaseModule } from './database/database.module';
// import { ProductsModule } from './products/products.module';
import { UserProductsModule } from './user-products/user-products.module';

@Module({
  imports: [DatabaseModule, UserProductsModule, CacheModule.register({
    isGlobal: true,
    
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
