import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateQuestaoDto } from './create-questao.dto';

describe('Create Question ', () => {
  it('should not be empty', async () => {
    const dto = plainToInstance(CreateQuestaoDto, {});
    const errors = await validate(dto, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    expect(errors.length).not.toBe(0);
  });
  it('Certo ou Errado', async () => {
    const dto = plainToInstance(CreateQuestaoDto, {
      cpfAutor: '054',
      enunciado: 'certo',
      certoOuErrado: {},
    });
    const errors = await validate(dto, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    console.log(errors);
    expect(errors.length).not.toBe(0);
  });
});
