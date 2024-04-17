import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundRequestSwagger } from 'src/swagger/helpers/NotFoundRequestErrro';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async create(createAnswerDto: CreateAnswerDto) {
    // Procurando se a pergunta informada realmente existe.
    const question = await this.prisma.question.findUnique({
      where: { id: createAnswerDto.question_id },
    });
    if (!question) {
      const errorMessage = new NotFoundRequestSwagger(
        'Question not found',
        'The requested question was not found',
        null,
        'answer/create',
      );
      throw new NotFoundException(errorMessage);
    }
    const data: any = {
      content: createAnswerDto.content,
      question_id: createAnswerDto.question_id,
    };

    // Verifica se o campo "name" está presente em createQuestionDto
    if (createAnswerDto.name) {
      data.name = createAnswerDto.name;
    }
    return await this.prisma.answer.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.answer.findMany();
  }

  async findOne(id: string) {
    const answer = await this.prisma.answer.findUnique({
      where: { id },
    });
    if (!answer) {
      const errorMessage = new NotFoundRequestSwagger(
        'Answer not found',
        'The requested answer was not found',
        null,
        'answer/:id',
      );
      throw new NotFoundException(errorMessage);
    }
    return answer;
  }

  async findFromQuestion(question_id: string) {
    // Procurando se a pergunta informada realmente existe.
    const question = await this.prisma.question.findUnique({
      where: { id: question_id },
    });
    if (!question) {
      const errorMessage = new NotFoundRequestSwagger(
        'Question not found',
        'The requested question was not found',
        null,
        'answer/question/:id',
      );
      throw new NotFoundException(errorMessage);
    }
    return await this.prisma.answer.findMany({
      where: {
        question_id,
      },
    });
  }
}
