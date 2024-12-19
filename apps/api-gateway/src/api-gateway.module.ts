import { Module } from '@nestjs/common';
import { UserProductsModule } from './user-products/user-products.module';

@Module({
  imports: [UserProductsModule],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
