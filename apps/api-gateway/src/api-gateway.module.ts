import { Module } from '@nestjs/common';
import { UserProductsModule } from './user-products/user-products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),UserProductsModule],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
