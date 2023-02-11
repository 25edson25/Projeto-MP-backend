import { MultiplaEscolhaEntity } from './entities/multipla-escolha.entity';
import { Test } from '@nestjs/testing';
import { MultiplaEscolhaService } from './multipla-escolha.service';
import { PrismaService } from '../../prisma/prisma.service';

const fakeMultiplaEscolhas: MultiplaEscolhaEntity[] = [
  {
    id: 1,
    idQuestao: 1,
    idGabarito: 1,
    itemA: 'a',
    itemB: 'b',
    itemC: 'c',
    itemD: 'd',
  },
  {
    id: 2,
    idQuestao: 2,
    idGabarito: 2,
    itemA: 'errado',
    itemB: 'certo',
    itemC: 'errado',
    itemD: 'errado',
  },
];

const prismaMock = {
  multiplaEscolha: {
    create: jest.fn().mockReturnValue(fakeMultiplaEscolhas[0]),
    findMany: jest.fn().mockResolvedValue(fakeMultiplaEscolhas),
    findUnique: jest.fn().mockResolvedValue(fakeMultiplaEscolhas[0]),
    update: jest.fn().mockResolvedValue(fakeMultiplaEscolhas[0]),
    delete: jest.fn(), // O método delete não retorna nada
  },
};
describe('MultiplaEscolha', () => {
  let service: MultiplaEscolhaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MultiplaEscolhaService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();
    service = module.get<MultiplaEscolhaService>(MultiplaEscolhaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return an array of Mutiple Choices Questions', async () => {
      const response = await service.findAll();
      expect(response).toEqual(fakeMultiplaEscolhas);
    });
  });
});
