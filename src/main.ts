import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.use('/img', express.static('img'));
  app.use(express.json({limit: '10mb'}));
  await app.listen(3000);
}
bootstrap();
