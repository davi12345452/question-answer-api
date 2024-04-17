import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedRequestSwagger {
  @ApiProperty()
  title: string;

  @ApiProperty()
  detail: string;

  @ApiProperty()
  type: string;

  @ApiProperty({ default: 401 })
  status: number;

  @ApiProperty()
  instance: string;

  constructor(title: string, detail: string, type: string, instance: string) {
    this.title = title;
    this.detail = detail;
    this.type = type;
    this.instance = instance;
    this.status = 401; // Definindo o valor padrão
  }
}
