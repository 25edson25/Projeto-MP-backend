import { CertoOuErrado } from '@prisma/client';

export class CertoOuErradoEntity implements CertoOuErrado {
  id: number;
  gabarito: boolean;
  idQuestao: number;
}
