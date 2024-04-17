import { Module } from '@nestjs/common';
import { QuestionModule } from './modules/question/question.module';
import { AnswerModule } from './modules/answer/answer.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [QuestionModule, AnswerModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
