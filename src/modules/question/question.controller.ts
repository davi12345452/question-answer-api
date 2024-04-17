import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/swagger/helpers/BadRequestError';
import { NotFoundRequestSwagger } from 'src/swagger/helpers/NotFoundRequestErrro';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @ApiBadRequestResponse({
    type: BadRequestSwagger,
  })
  @ApiNotFoundResponse({
    type: NotFoundRequestSwagger,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }
}
