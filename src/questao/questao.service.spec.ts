import { Test } from '@nestjs/testing';
import { QuestaoService } from './questao.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

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

const prismaMock = {
  valorExato: {
    create: jest
      .fn()
      .mockReturnValue(fakeMultiplaEscolha)
      .mockReturnValue(fakeCertoOuErrado)
      .mockReturnValue(fakeValorExato),
  },
};
describe('Questao', () => {
  let service: QuestaoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        QuestaoService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();
    service = module.get<QuestaoService>(QuestaoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createMultiplaEscolha', () => {
    it('should return a Multiple Choice Question', async () => {
      const response = await service.createMultipleChoice({
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
});
