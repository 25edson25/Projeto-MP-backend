import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateCertoOuErradoDto } from './create-certo-ou-errado.dto';

describe('Create Certo Ou Errado Dto', () => {
  it('should not be empty', async () => {
    const dto = plainToInstance(CreateCertoOuErradoDto, {});
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
  });
});
