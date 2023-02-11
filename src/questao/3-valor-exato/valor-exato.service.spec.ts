import { ValorExatoEntity } from './entities/valor-exato.entity';
import { Test } from '@nestjs/testing';
import { ValorExatoService } from './valor-exato.service';
import { PrismaService } from '../../prisma/prisma.service';

const fakeValorExato: ValorExatoEntity[] = [
  {
    id: 1,
    idQuestao: 1,
    gabarito: 132,
  },
  {
    id: 2,
    idQuestao: 2,
    gabarito: 10,
  },
];

const prismaMock = {
  valorExato: {
    create: jest.fn().mockReturnValue(fakeValorExato[0]),
    findMany: jest.fn().mockResolvedValue(fakeValorExato),
    findUnique: jest.fn().mockResolvedValue(fakeValorExato[0]),
    update: jest.fn().mockResolvedValue(fakeValorExato[0]),
    delete: jest.fn(), // O método delete não retorna nada
  },
};
describe('ValorExato', () => {
  let service: ValorExatoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ValorExatoService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();
    service = module.get<ValorExatoService>(ValorExatoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return an array of Exact Value Questions', async () => {
      const response = await service.findAll();
      expect(response).toEqual(fakeValorExato);
    });
  });
});
