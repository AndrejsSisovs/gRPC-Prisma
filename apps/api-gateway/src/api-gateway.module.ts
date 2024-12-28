import { Module } from '@nestjs/common';
import { UserProductsModule } from './user-products/user-products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BullModule } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './queue/constants';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    UserProductsModule, 
    UsersModule,
    QueueModule,
    ConfigModule,
    ConfigModule.forRoot(),
    BullModule.forRootAsync({
      useFactory: async(configService:ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    //   redis: {
    //     //host:'172.17.0.2',  // NOW with implemented ConfigModule.forRoot() we dont need to hardcode this manually
    //     host:'localhost',
    //     port: 6379
    //   },               // BullModule.forRoot('alternative-config', { //we register an alternative config
    // }),     //     host:'172.17.0.3', //if we have multiple reddis instances and we have registred multiple queues, a nd we want different queue to use different reddis instance
    BullModule.registerQueue({    //we tell Bull module which queues to register
        //name: 'transcode' // name will also be an injection token we will use so we will pull it out into its own constant
        name: TRANSCODE_QUEUE,
    })   
  ],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}