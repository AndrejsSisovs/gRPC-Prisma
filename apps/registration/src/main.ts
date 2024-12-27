import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
import { REGISTRATION_PACKAGE_NAME } from '@app/comon';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../registration.proto'),
        package: REGISTRATION_PACKAGE_NAME,
        url: '127.0.0.1:3001',
      },
    },
  );

  await app.listen();
}
bootstrap();
