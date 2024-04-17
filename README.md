# Answer and Question starter NestJS API

## Description

This is a repository of a basic Rest API built with NestJS and Prisma, using a PostgreSQL database. The purpose of this application was to implement comprehensive Swagger documentation, following an error handling standard [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807). The API essentially allows creating questions and answers.

## Installation

<p>
You must have Docker and Nest/CLI installed on your computer. Also, make sure to 
create the .env and docker-compose.yml files in your project folder.
</p>

```bash
# Installing project dependencies
$ npm install

# Creating a container for the PostgreSQL database
$ docker compose up -d

# Applying migrations to the database
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

