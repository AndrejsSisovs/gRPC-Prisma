import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE } from './constants';
import { REGISTRATION_PACKAGE_NAME } from '@app/comon';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: REGISTRATION_PACKAGE_NAME,
          protoPath: join(__dirname, '../registration.proto'),
          url: '127.0.0.1:3001',
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
