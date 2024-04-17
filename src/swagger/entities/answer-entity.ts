import { ApiProperty } from '@nestjs/swagger';
import { Answer } from '@prisma/client';
import { IsDateString, IsString, IsUUID } from 'class-validator';

export class AnswerEntity implements Answer {
  @ApiProperty({
    description: 'Database ID of the answer.',
    example: 'a270a9a1-fab7-4924-b958-1d432c03619f',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Name of the person who provided the answer.',
    example: 'User Davi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Content of the answer.',
    example: 'This is an answer.',
  })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'ID of the question being answered.',
    example: '27337c64-b051-42ab-81c8-3232bc93be6e',
  })
  @IsString()
  @IsUUID()
  question_id: string;

  @ApiProperty({
    description: 'Date of answer creation.',
    example: '2023-04-17T17:42:57.303Z',
  })
  @IsDateString()
  created_at: Date;
}
