import { QuestaoController } from './questao.controller';
import { QuestaoService } from './questao.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Test } from '@nestjs/testing';

const fakeMultiplaEscolha: Prisma.QuestaoGetPayload<{
  include: { multiplaEscolha: true };
}> = {
  id: 1,
  cpfAutor: '05234142475',
  enunciado: 'É um país da Europa. No passado invadiu o Brasil',
  multiplaEscolha: {
    id: 1,
    idQuestao: 1,
    idGabarito: 1,
    itemA: 'Holanda',
    itemB: 'Espanha',
    itemC: 'França',
    itemD: 'Itália',
  },
};
const fakeCertoOuErrado: Prisma.QuestaoGetPayload<{
  include: { certoOuErrado: true };
}> = {
  id: 2,
  cpfAutor: '98754351064',
  enunciado: 'Julgue o item: 1+1=3',
  certoOuErrado: {
    id: 1,
    idQuestao: 2,
    gabarito: false,
  },
};
const fakeValorExato: Prisma.QuestaoGetPayload<{
  include: { valorExato: true };
}> = {
  id: 3,
  cpfAutor: '63892263849',
  enunciado: 'Quanto é 2+2?',
  valorExato: {
    id: 1,
    idQuestao: 3,
    gabarito: 4,
  },
};

const prismaMock = (returnValue) => ({
  questao: {
    create: jest.fn().mockReturnValue(returnValue),
  },
});

describe('Controller Tests', () => {
  let controller: QuestaoController;

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Create multiplaEscolha', () => {
    beforeAll(async () => {
      {
        const module = await Test.createTestingModule({
          controllers: [QuestaoController],
          providers: [
            QuestaoService,
            {
              provide: PrismaService,
              useValue: prismaMock(fakeMultiplaEscolha),
            },
          ],
        }).compile();
        controller = module.get<QuestaoController>(QuestaoController);
      }
    });
    it('should return a Multiple Choice Question', async () => {
      const response = await controller.createMultipleChoice({
        cpfAutor: '05234142475',
        enunciado: 'É um país da Europa. No passado invadiu o Brasil',
        multiplaEscolha: {
          idGabarito: 1,
          itemA: 'Holanda',
          itemB: 'Espanha',
          itemC: 'França',
          itemD: 'Itália',
        },
      });
      expect(response).toEqual(fakeMultiplaEscolha);
    });
  });

  describe('createCertoOuErrado', () => {
    beforeAll(async () => {
      {
        const module = await Test.createTestingModule({
          controllers: [QuestaoController],
          providers: [
            QuestaoService,
            {
              provide: PrismaService,
              useValue: prismaMock(fakeCertoOuErrado),
            },
          ],
        }).compile();
        controller = module.get<QuestaoController>(QuestaoController);
      }
    });
    it('should return a CertoOuErrado Question', async () => {
      const response = await controller.createTrueOrFalse({
        cpfAutor: '98754351064',
        enunciado: 'Julgue o item: 1+1=3',
        certoOuErrado: {
          gabarito: false,
        },
      });
      expect(response).toEqual(fakeCertoOuErrado);
    });
  });
  describe('createValorExato', () => {
    beforeAll(async () => {
      {
        const module = await Test.createTestingModule({
          controllers: [QuestaoController],
          providers: [
            QuestaoService,
            {
              provide: PrismaService,
              useValue: prismaMock(fakeValorExato),
            },
          ],
        }).compile();
        controller = module.get<QuestaoController>(QuestaoController);
      }
    });
    it('should return a Exact Value Question', async () => {
      const response = await controller.createExactValue({
        cpfAutor: '63892263849',
        enunciado: 'Quanto é 2+2?',
        valorExato: {
          gabarito: 4,
        },
      });
      expect(response).toEqual(fakeValorExato);
    });
  });
});
