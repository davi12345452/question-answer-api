import { ApiProperty } from '@nestjs/swagger';

export class ForbiddenRequestSwagger {
  @ApiProperty()
  title: string;

  @ApiProperty()
  detail: string;

  @ApiProperty()
  type: string;

  @ApiProperty({ default: 403 })
  status: number;

  @ApiProperty()
  instance: string;

  constructor(title: string, detail: string, type: string, instance: string) {
    this.title = title;
    this.detail = detail;
    this.type = type;
    this.instance = instance;
    this.status = 403; // Definindo o valor padrão
  }
}
