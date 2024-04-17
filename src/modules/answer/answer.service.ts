import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundRequestSwagger } from 'src/swagger/helpers/NotFoundRequestErrro';

/***
 * LISTA DE ERROS NO ANSWER SERVICE (ANSWER_ERROR-{}):
 * - 01: Pergunta informada na criação de uma pergunta não existe
 * - 02: Resposta informada não existe.
 * - 03: Pergunta informada na busca por resposta, não existe.
 */
@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  /**
   * Código para o endpoint de criação de uma resposta. É necessário
   * fornecer dados como, a pergunta que se espera responder e o con-
   * teúdo da resposta. Pode-se ainda fornecer um nome, ou nada e
   * ficar como anônimo. Devolve a estrutura da resposta criada.
   */
  async create(createAnswerDto: CreateAnswerDto) {
    // Procurando se a pergunta informada realmente existe.
    const question = await this.prisma.question.findUnique({
      where: { id: createAnswerDto.question_id },
    });
    if (!question) {
      const errorMessage = new NotFoundRequestSwagger(
        'Question not found',
        'The requested question was not found',
        'ANSWER-ERROR-01',
        'answer/create',
      );
      throw new NotFoundException(errorMessage);
    }
    const data: any = {
      content: createAnswerDto.content,
      question_id: createAnswerDto.question_id,
    };

    // Verifica se o campo "name" está presente em createAnswerDto
    if (createAnswerDto.name) {
      data.name = createAnswerDto.name;
    }
    return await this.prisma.answer.create({
      data,
    });
  }

  /**
   * Este código é utilizado no endpoint que retorna todas as respostas
   * que existem na base de dados da aplicação, em forma de array
   */
  async findAll() {
    return await this.prisma.answer.findMany();
  }

  /**
   * Este código é utilizado no endpoint que busca uma única
   * resposta, especificada pelo ID. Caso exista, retorna o
   * corpo da resposta.
   */
  async findOne(id: string) {
    const answer = await this.prisma.answer.findUnique({
      where: { id },
    });
    if (!answer) {
      const errorMessage = new NotFoundRequestSwagger(
        'Answer not found',
        'The requested answer was not found',
        'ANSWER-ERROR-02',
        'answer/:id',
      );
      throw new NotFoundException(errorMessage);
    }
    return answer;
  }

  /**
   * Este código é utilizado no endpoint que retorna todas as respostas
   * que existem para uma pergunta específica, especificada pelo ID de-
   * la. Caso a pergunta exista, retorna um array de answers.
   */
  async findFromQuestion(question_id: string) {
    // Procurando se a pergunta informada realmente existe.
    const question = await this.prisma.question.findUnique({
      where: { id: question_id },
    });
    if (!question) {
      const errorMessage = new NotFoundRequestSwagger(
        'Question not found',
        'The requested question was not found',
        'ANSWER-ERROR-03',
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
