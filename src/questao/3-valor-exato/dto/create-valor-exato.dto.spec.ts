import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateValorExatoDto } from './create-valor-exato.dto';

describe('Create Multiple Choice Dto', () => {
  it('should not be empty', async () => {
    const dto = plainToInstance(CreateValorExatoDto, {});
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
  });
});
