import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}
  async create(createQuestionDto: CreateQuestionDto) {
    const data: any = {
      content: createQuestionDto.content,
    };

    // Verifica se o campo "name" está presente em createQuestionDto
    if (createQuestionDto.name) {
      data.name = createQuestionDto.name;
    }

    return await this.prisma.question.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.question.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.question.findUnique({
      where: { id },
    });
  }
}
