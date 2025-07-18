import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('NODE_PORT', 5000);
  await app.listen(port);
  Logger.log(`This application is running on: ${await app.getUrl()}`);
}
bootstrap();
