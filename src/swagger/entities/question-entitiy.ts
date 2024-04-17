import { ApiProperty } from '@nestjs/swagger';
import { Question } from '@prisma/client';
import { IsDateString, IsString, IsUUID } from 'class-validator';

export class QuestionEntity implements Question {
  @ApiProperty({
    description: 'Database ID of the question.',
    example: '349f5544-54ea-46da-826e-4c417bebc922',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Name of the person who provided the question.',
    example: 'User Davi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Content of the question.',
    example: 'This is a question?',
  })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Date of question creation.',
    example: '2023-09-22T12:57:52.503Z',
  })
  @IsDateString()
  created_at: Date;
}
