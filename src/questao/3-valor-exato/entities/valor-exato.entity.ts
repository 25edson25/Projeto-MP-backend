import { ValorExato } from '@prisma/client';

export class ValorExatoEntity implements ValorExato {
  id: number;
  gabarito: number;
  idQuestao: number;
}
