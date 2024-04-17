import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAnswerDto {
  @IsOptional()
  @ApiProperty({
    description:
      'Name of the user who answered the question. If nothing is provided, it remains anonymous.',
    example: 'User David',
    required: false,
  })
  @IsString()
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Content of the response to the question being answered.',
    example: 'This is an example response.',
    required: true,
  })
  @IsString()
  content: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'UUID of the question being answered.',
    example: '142914d8-80de-4285-bdf8-b29918722509',
    required: true,
  })
  @IsString()
  @IsUUID()
  question_id: string;
}
