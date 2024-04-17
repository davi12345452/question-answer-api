import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class NotFoundRequestSwagger {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  detail: string;

  @IsNotEmpty()
  @ApiProperty()
  type: string;

  @IsOptional()
  @ApiProperty({ default: 404 })
  status: number;

  @IsNotEmpty()
  @ApiProperty()
  instance: string;

  constructor(title: string, detail: string, type: string, instance: string) {
    this.title = title;
    this.detail = detail;
    this.type = type;
    this.instance = instance;
    this.status = 404; // Definindo o valor padrão
  }
}
