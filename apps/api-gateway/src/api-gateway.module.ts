import { Module } from '@nestjs/common';
import { UserProductsModule } from './user-products/user-products.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(),UserProductsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
//