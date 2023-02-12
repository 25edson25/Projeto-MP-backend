import { Turma } from '@prisma/client';

export class TurmaEntity implements Turma {
  id: number;
  dataInicio: Date;
  dataFim: Date;
  cpfProfessor: string;
}
