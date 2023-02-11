import { ValorExato } from '@prisma/client';
import { IsNumber } from 'class-validator';

export class ValorExatoEntity implements ValorExato {
  @IsNumber()
  id: number;
  @IsNumber()
  gabarito: number;
  @IsNumber()
  idQuestao: number;
}
