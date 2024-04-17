import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAnswerDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @IsUUID()
  question_id: string;
}
