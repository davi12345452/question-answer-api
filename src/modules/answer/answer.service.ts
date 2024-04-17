import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async create(createAnswerDto: CreateAnswerDto) {
    // Procurando se a pergunta informada realmente existe.
    const question = await this.prisma.question.findUnique({
      where: { id: createAnswerDto.question_id },
    });
    if (!question) {
      throw new NotFoundException({
        message: 'Question informed by id not found',
      });
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
    return await this.prisma.answer.findUnique({
      where: { id },
    });
  }

  async findFromQuestion(question_id: string) {
    return await this.prisma.answer.findMany({
      where: {
        question_id,
      },
    });
  }
}
