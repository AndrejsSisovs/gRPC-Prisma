import { Module } from '@nestjs/common';
import { UserProductsService } from './user-products.service';
import { UserProductsController } from './user-products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, TRANSCODE_QUEUE } from './constants';
import { PRODUCT_PACKAGE_NAME } from '@app/comon'
import { join } from 'path';
import { TranscodeConsumer } from './transcode.consumer';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: PRODUCT_PACKAGE_NAME,
          protoPath: join(__dirname, '../auth.proto'),
          url: '127.0.0.1:3002',
        }
      },
    ]),
    ConfigModule.forRoot(),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async(configService:ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue({    
      name: TRANSCODE_QUEUE,
  })
  ],
  controllers: [UserProductsController],
  providers: [UserProductsService, TranscodeConsumer],
})
export class UserProductsModule {}
