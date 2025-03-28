import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Сайт по Элевиону')
    .setDescription('Буквально сайт по Элевиону')
    .setVersion('1.0.0')
    .addTag('DenwerTeam')
    .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document)

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();