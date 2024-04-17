# Answer and Question starter NestJS API

## Description

Este é um repositório de uma API Rest básica feita com NestJS e Prisma, utilizando um banco de dados PostgreSQL. O intuito dessa aplicação era implementar
uma documentação completa no Swagger, seguindo um padrão de tratamento de erros [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807). 

## Installation

<p>
Você deve ter instalado no seu computador o Docker e o Nest/CLI. Atente-se ainda em 
em criar os arquivos .env e docker-compose.yml na sua pasta do projeto.
</p>

```bash
# Instalando as dependencias do projeto
$ npm install

# Criando um container para o banco de dados postgresql
$ docker compose up -d

# Aplicando as migrations no banco
$ npx prisma migrate deploy
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

