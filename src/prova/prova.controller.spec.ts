import { ProvaController } from './prova.controller';
import { ProvaService } from './prova.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Test } from '@nestjs/testing';
import { CreateProvaDto } from './dto/create-prova.dto';

const fakeReturnGetProva: Prisma.ProvaGetPayload<{
  include: {
    questoes: {
      include: {
        multiplaEscolha: {
          select: {
            gabarito: { select: { id: true } };
            itemA: true;
            itemB: true;
            itemC: true;
            itemD: true;
          };
        };
        certoOuErrado: { select: { gabarito: true } };
        valorExato: { select: { gabarito: true } };
      };
    };
  };
}> = {
  id: 1,
  horarioInicio: new Date(2022, 2, 13, 16),
  horarioFim: new Date(2022, 2, 13, 18),
  questoes: [
    {
      id: 1,
      cpfAutor: '001',
      enunciado: 'Marque o V',
      multiplaEscolha: {
        gabarito: { id: 2 },
        itemA: 'F',
        itemB: 'V',
        itemC: 'F',
        itemD: 'F',
      },
      certoOuErrado: undefined,
      valorExato: undefined,
    },
    {
      id: 2,
      cpfAutor: '001',
      enunciado: 'Julgue a afirmação: 1+1=3',
      multiplaEscolha: undefined,
      certoOuErrado: { gabarito: false },
      valorExato: undefined,
    },
    {
      id: 4,
      cpfAutor: '002',
      enunciado: 'Quanto é 2+1?',
      multiplaEscolha: undefined,
      certoOuErrado: undefined,
      valorExato: { gabarito: 3 },
    },
  ],
};

const fakeCreateProvaDto: CreateProvaDto = {
  ...fakeReturnGetProva,
  questoesIds: fakeReturnGetProva.questoes.map((e) => ({ id: e.id })),
};

describe('Prova', () => {
  let controller: ProvaController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProvaController],
      providers: [
        ProvaService,
        {
          provide: PrismaService,
          useValue: {
            prova: {
              create: jest.fn().mockReturnValue(fakeReturnGetProva),
            },
          },
        },
      ],
    }).compile();
    controller = module.get<ProvaController>(ProvaController);
  });
  it('should return a Prova', async () => {
    const response = await controller.create(fakeCreateProvaDto);
    expect(response).toBe(fakeReturnGetProva);
  });
});
