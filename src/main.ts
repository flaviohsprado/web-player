import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { AllExceptionsFilter } from './main/filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200,
  });

  app.use(helmet());
  app.useGlobalFilters(new AllExceptionsFilter());
  //app.connectMicroservice(grpcUserOptions);

  await app.startAllMicroservices();
  await app.listen(port);
}
bootstrap();
