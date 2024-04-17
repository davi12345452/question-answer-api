import { ApiProperty } from '@nestjs/swagger';
import { Question } from '@prisma/client';
import { IsDateString, IsString, IsUUID } from 'class-validator';

export class QuestionEntity implements Question {
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
  @IsDateString()
  created_at: Date;
}
