import { MultiplaEscolha } from '@prisma/client';

export class MultiplaEscolhaEntity implements MultiplaEscolha {
  id: number;
  itemA: string;
  itemB: string;
  itemC: string;
  itemD: string;
  idGabarito: 1 | 2 | 3 | 4;
  idQuestao: number;
}
