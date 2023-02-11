import { Questao } from '@prisma/client';

export class QuestaoEntity implements Questao {
  id: number;
  enunciado: string;
  cpfAutor: string;
}
