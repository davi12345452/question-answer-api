import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsOptional()
  @ApiProperty({
    description:
      'Name of the user who created the question. If nothing is provided, it remains anonymous.',
    example: 'User David',
    required: false,
  })
  @IsString()
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Content of the question.',
    example: 'This is a question example?',
    required: true,
  })
  @IsString()
  content: string;
}
