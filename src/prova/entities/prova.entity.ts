import { Prova } from '@prisma/client';

export class ProvaEntity implements Prova {
  id: number;
  horarioInicio: Date;
  horarioFim: Date;
}
