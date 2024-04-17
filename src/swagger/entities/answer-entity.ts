import { ApiProperty } from '@nestjs/swagger';
import { Answer } from '@prisma/client';
import { IsDateString, IsString, IsUUID } from 'class-validator';

export class AnswerEntity implements Answer {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  question_id: string;

  @ApiProperty()
  @IsDateString()
  created_at: Date;
}
