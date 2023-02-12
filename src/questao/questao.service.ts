import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma, Questao } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateExactValue,
  CreateMultipleChoice,
  CreateTrueOrFalse,
} from './dto/create-questao.dto';

type QuestaoModel = Prisma.QuestaoDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<QuestaoModel>().setOptions(
  {},
);

@Injectable()
export class QuestaoService extends getCrud<
  Prisma.QuestaoGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.questao, defaultOptions);
  }

  async createMultipleChoice(createMultipleChoice: CreateMultipleChoice) {
    return await this.prisma.questao.create({
      data: {
        ...createMultipleChoice,
        multiplaEscolha: {
          create: { ...createMultipleChoice.multiplaEscolha },
        },
      },
      include: { multiplaEscolha: true },
    });
  }

  async createTrueOrFalse(createTrueOrFalse: CreateTrueOrFalse) {
    return await this.prisma.questao.create({
      data: {
        ...createTrueOrFalse,
        certoOuErrado: {
          create: { ...createTrueOrFalse.certoOuErrado },
        },
      },
      include: { certoOuErrado: true },
    });
  }

  async createExactValue(createExactValue: CreateExactValue) {
    return await this.prisma.questao.create({
      data: {
        ...createExactValue,
        valorExato: {
          create: { ...createExactValue.valorExato },
        },
      },
      include: { valorExato: true },
    });
  }
}
