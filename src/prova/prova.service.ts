import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProvaDto } from './dto/create-prova.dto';
import { CorrigeProvaDto } from './dto/corrige-prova.dto';

type ProvaModel = Prisma.ProvaDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<ProvaModel>().setOptions({
  select: {
    id: true,
    horarioInicio: true,
    horarioFim: true,
    questoes: {
      include: { certoOuErrado: true, multiplaEscolha: true, valorExato: true },
    },
  },
});

@Injectable()
export class ProvaService extends getCrud<
  Prisma.ProvaGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.prova, defaultOptions);
  }

  async create(createProvaDto: CreateProvaDto) {
    return await this.prisma.prova.create({
      data: {
        horarioInicio: createProvaDto.horarioInicio,
        horarioFim: createProvaDto.horarioFim,
        questoes: {
          connect: createProvaDto.questoesIds.map((e) => {
            return { id: e.id };
          }),
        },
      },
      ...defaultOptions
    });
  }

  async corrigeProva(id: number, corrigeProvaDto: CorrigeProvaDto) {
    const provaGabarito = await this.prisma.prova.findUnique({
      where: { id },
      include: {
        questoes: {
          include: {
            certoOuErrado: true,
            multiplaEscolha: { select: { gabarito: true } },
            valorExato: true,
          },
        },
      },
    });

    if (!provaGabarito) throw new NotFoundException('Prova não encontrada');

    return {
      questoes: provaGabarito.questoes.map((questaoGabarito) => {
        if (questaoGabarito.certoOuErrado) {
          const questaoDoAluno = corrigeProvaDto.questoes.find(
            (questao) => questao.id == questaoGabarito.id,
          );
          return {
            id: questaoGabarito.id,
            correct:
              questaoDoAluno.certoOuErrado.gabarito ==
              questaoGabarito.certoOuErrado.gabarito,
          };
        } else if (questaoGabarito.valorExato) {
          const questaoDoAluno = corrigeProvaDto.questoes.find(
            (questao) => questao.id == questaoGabarito.id,
          );
          return {
            id: questaoDoAluno.id,
            correct:
              questaoDoAluno.valorExato.gabarito ==
              questaoGabarito.valorExato.gabarito,
          };
        } else if (questaoGabarito.multiplaEscolha) {
          const questaoDoAluno = corrigeProvaDto.questoes.find(
            (questao) => questao.id == questaoGabarito.id,
          );
          return {
            id: questaoDoAluno.id,
            correct:
              questaoDoAluno.multiplaEscolha.gabarito.id ==
              questaoGabarito.multiplaEscolha.gabarito.id,
          };
        }
      }),
    };
  }
}
