import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurando o Swagger na aplicação
  const config = new DocumentBuilder()
    .setTitle('Answers and Questions API')
    .setDescription(
      'API for creating questions that can be answered. Cretade by Davi -> github.com/davi12345452',
    )
    .setVersion('1.0')
    .addTag('API Answers & Questions')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation-api', app, document);

  // Rodando a aplicação na porta 3000
  await app.listen(3000);
}
bootstrap();
