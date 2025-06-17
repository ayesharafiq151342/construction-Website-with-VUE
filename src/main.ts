import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from "./app.module";
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend (e.g., Vue on localhost:5173)
  app.enableCors({
    origin: 'http://localhost:5173', // frontend URL
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // Enable JSON body parsing (optional since NestJS already does this by default)
  app.use(express.json());

  await app.listen(3000);
}
bootstrap();
