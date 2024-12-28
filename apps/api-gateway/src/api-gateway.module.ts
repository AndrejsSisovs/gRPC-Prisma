import { Module } from '@nestjs/common';
import { UserProductsModule } from './user-products/user-products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BullModule } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './user-products/constants';
import { TranscodeConsumer } from './user-products/transcode.consumer';

@Module({
  imports: [
    UserProductsModule, 
    UsersModule
  ],
  controllers: [],
})
export class ApiGatewayModule {}




    // BullModule.forRoot({
    //     redis: {
    //     //host:'172.17.0.2',  // NOW with implemented ConfigModule.forRoot() we dont need to hardcode this manually
    //      host:'localhost',
    //     port: 6379
    //    },               // BullModule.forRoot('alternative-config', { //we register an alternative config
    //  }),     //host:'172.17.0.3', //if we have multiple reddis instances and we have registred multiple queues, a nd we want different queue to use different reddis instance