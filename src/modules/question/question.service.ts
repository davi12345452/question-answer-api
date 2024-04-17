import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundRequestSwagger } from 'src/swagger/helpers/NotFoundRequestErrro';

/***
 * LISTA DE ERROS NO QUESTION SERVICE (QUESTION_ERROR-{}):
 * - 01: Pergunta informada não existe.
 */
@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}
  /**
   * Código para o endpoint de criação de uma pergunta. É necessário
   * fornecer apenas o conteúdo da resposta.  Pode-se ainda fornecer
   * um nome, ou nada e ficar como anônimo. Devolve a estrutura   da
   * pergunta criada.
   */
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

  /**
   * Este código é utilizado no endpoint que retorna todas as perguntas
   * que existem na base de dados da aplicação, em forma de array.
   */
  async findAll() {
    return await this.prisma.question.findMany();
  }

  /**
   * Este código é utilizado no endpoint que busca uma única
   * pergunta, especificada pelo ID. Caso exista, retorna o
   * corpo da pergunta.
   */
  async findOne(id: string) {
    const question = await this.prisma.question.findUnique({
      where: { id },
    });
    if (!question) {
      const errorMessage = new NotFoundRequestSwagger(
        'Question not found',
        'The requested question was not found',
        'QUESTION-ERROR-01',
        'question/:id',
      );
      throw new NotFoundException(errorMessage);
    }
    return question;
  }
}
