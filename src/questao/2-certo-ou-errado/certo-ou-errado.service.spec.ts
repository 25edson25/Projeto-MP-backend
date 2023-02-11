import { CertoOuErradoEntity } from './entities/certo-ou-errado.entity';
import { Test } from '@nestjs/testing';
import { CertoOuErradoService } from './certo-ou-errado.service';
import { PrismaService } from '../../prisma/prisma.service';

const fakeCertoOuErrado: CertoOuErradoEntity[] = [
  {
    id: 1,
    idQuestao: 1,
    gabarito: false,
  },
  {
    id: 2,
    idQuestao: 2,
    gabarito: true,
  },
];

const prismaMock = {
  certoOuErrado: {
    create: jest.fn().mockReturnValue(fakeCertoOuErrado[0]),
    findMany: jest.fn().mockResolvedValue(fakeCertoOuErrado),
    findUnique: jest.fn().mockResolvedValue(fakeCertoOuErrado[0]),
    update: jest.fn().mockResolvedValue(fakeCertoOuErrado[0]),
    delete: jest.fn(), // O método delete não retorna nada
  },
};
describe('CertoOuErrado', () => {
  let service: CertoOuErradoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CertoOuErradoService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();
    service = module.get<CertoOuErradoService>(CertoOuErradoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return an array of True or False Questions', async () => {
      const response = await service.findAll();
      expect(response).toEqual(fakeCertoOuErrado);
    });
  });
});
