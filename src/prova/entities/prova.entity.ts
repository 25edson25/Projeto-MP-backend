import { Prova } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class ProvaEntity implements Prova {
  id: number;
  @IsDate()
  @Type(() => Date)
  horarioInicio: Date;

  @IsDate()
  @Type(() => Date)
  horarioFim: Date;
}
