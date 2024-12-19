import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
  
}
bootstrap();
// import { NestFactory } from '@nestjs/core';
// import { ApiGatewayModule } from './api-gateway.module';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';

// async function bootstrap() {
//   // Cast app to NestExpressApplication
//   const app = await NestFactory.create<NestExpressApplication>(ApiGatewayModule);

//   // Set up static assets and view engine
//   app.setBaseViewsDir(join(__dirname, '..', 'views'));
//   app.setViewEngine('hbs');

//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();