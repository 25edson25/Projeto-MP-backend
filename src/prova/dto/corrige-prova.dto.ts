import { Prisma } from '@prisma/client';

export class CorrigeProvaDto {
  questoes: Prisma.QuestaoGetPayload<{
    select: {
      id: true;
      multiplaEscolha: { select: { gabarito: {select:{id:true}} } };
      certoOuErrado: { select: { gabarito: true } };
      valorExato: { select: { gabarito: true } };
    };
  }>[];
}

