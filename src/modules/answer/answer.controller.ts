import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { NotFoundRequestSwagger } from 'src/swagger/helpers/NotFoundRequestErrro';
import { AnswerEntity } from 'src/swagger/entities/answer-entity';

@ApiTags('Answer')
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  // Este endpoint permite a criação de uma nova resposta: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables the creation of an answer',
    description:
      'This endpoint allows the creation of an answer for a valid question in the system',
  })
  @ApiOkResponse({
    description: 'Answer created successfully',
    type: AnswerEntity,
  })
  @ApiNotFoundResponse({
    type: NotFoundRequestSwagger,
  })
  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  // Este endpoint permite achar todas as resposta existentes no sistema: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables to find all answers',
    description: 'This endpoint allows to user find all answers in the system',
  })
  @ApiOkResponse({
    description: 'Answers find successfully',
    type: AnswerEntity,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.answerService.findAll();
  }

  // Este endpoint permite achar uma resposta específica existente no sistema: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables to find an specific answer',
    description:
      'This endpoint allows to user find some specific answer indicates by ID',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'UUID of the answer to find',
    type: String,
  })
  @ApiOkResponse({
    description: 'Answer find successfully',
    type: AnswerEntity,
  })
  @ApiNotFoundResponse({
    type: NotFoundRequestSwagger,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerService.findOne(id);
  }

  // Este endpoint permite achar todas respostas associadas a uma pergunta específica: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables finding all answers to specific questions',
    description:
      'This endpoint allows users to retrieve all answers for a valid question in the system',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'UUID of the question to find answers of',
    type: String,
  })
  @ApiOkResponse({
    description: 'Answers find successfully',
    type: AnswerEntity,
    isArray: true,
  })
  @ApiNotFoundResponse({
    type: NotFoundRequestSwagger,
  })
  @Get('question/:id')
  findFromQuestion(@Param('id') id: string) {
    return this.answerService.findFromQuestion(id);
  }
}
