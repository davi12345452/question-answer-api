import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurando o Swagger na aplicação
  const config = new DocumentBuilder()
    .setTitle('API Estudos')
    .setDescription('API de Estudos em Nest')
    .setVersion('1.0')
    .addTag('API do Davi')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation-api', app, document);

  // Rodando a aplicação na porta 3000
  await app.listen(3000);
}
bootstrap();
