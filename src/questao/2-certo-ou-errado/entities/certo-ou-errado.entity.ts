import { CertoOuErrado } from '@prisma/client';
import { IsBoolean, IsNumber } from 'class-validator';

export class CertoOuErradoEntity implements CertoOuErrado {
  @IsNumber()
  id: number;
  @IsBoolean()
  gabarito: boolean;
  @IsNumber()
  idQuestao: number;
}
