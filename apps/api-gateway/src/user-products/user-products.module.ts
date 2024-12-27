import { Module } from '@nestjs/common';
import { UserProductsService } from './user-products.service';
import { UserProductsController } from './user-products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE } from './constants';
import { PRODUCT_PACKAGE_NAME, REGISTRATION_PACKAGE_NAME } from '@app/comon'
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: PRODUCT_PACKAGE_NAME,
          protoPath: join(__dirname, '../auth.proto')
        },
      },
      {
        name: AUTH_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: REGISTRATION_PACKAGE_NAME,
          protoPath: join(__dirname, '../registration.proto')
        },
      },
    ]),
  ],
  controllers: [UserProductsController],
  providers: [UserProductsService],
})
export class UserProductsModule {}
