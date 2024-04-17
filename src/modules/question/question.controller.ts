import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { NotFoundRequestSwagger } from 'src/swagger/helpers/NotFoundRequestErrro';
import { QuestionEntity } from 'src/swagger/entities/question-entitiy';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // Este endpoint permite a criação de uma nova pergunta: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables the creation of a question',
    description:
      'This endpoint allows the creation of a question in the system',
  })
  @ApiOkResponse({
    description: 'Question created successfully',
    type: QuestionEntity,
  })
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  // Este endpoint permite achar todas as resposta existentes no sistema: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables to find all questions',
    description:
      'This endpoint allows to user find all questions in the system',
  })
  @ApiOkResponse({
    description: 'Question find successfully',
    type: QuestionEntity,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  // Este endpoint permite achar uma pergunta específica existente no sistema: ABERTA NO SWAGGER
  @ApiOperation({
    summary: 'Enables to find an specific question',
    description:
      'This endpoint allows to user find some specific question indicates by ID',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'UUID of the question to find',
    type: String,
  })
  @ApiOkResponse({
    description: 'Question find successfully',
    type: QuestionEntity,
  })
  @ApiNotFoundResponse({
    type: NotFoundRequestSwagger,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }
}
