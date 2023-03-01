import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [],
  });

  const config = new DocumentBuilder()
    .setTitle('Seeding Tutorial')
    .setDescription(
      'Migration (Seeding) Example using TypeORM for MySQL with Nest.js',
    )
    .setVersion('1.0.0')
    .addTag('seeding-tutorial')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  await app.listen(process.env.API_PORT);
}
bootstrap();
