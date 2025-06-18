import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from "./app.module";
import { ConfigService } from '@nestjs/config';
import * as express from 'express';
import './polyfill'
// console.log("✅ App starting...");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get config service from NestJS app context
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  // Enable CORS for frontend (e.g., Vue on localhost:5173)
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // (Optional) Enable JSON parsing explicitly
  app.use(express.json());

  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
