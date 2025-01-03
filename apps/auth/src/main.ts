import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PRODUCT_PACKAGE_NAME } from '@app/comon';
import { UserProductsModule } from './user-products/user-products.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions> (
    UserProductsModule,
  {
    transport: Transport.GRPC,
    options: {
      protoPath: join(__dirname, '../auth.proto'),
      package: PRODUCT_PACKAGE_NAME,
      url: '127.0.0.1:3002',
    },
  },
);
await app.listen();
}
bootstrap();
