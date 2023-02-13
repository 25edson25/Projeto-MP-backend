import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateMultiplaEscolhaDto } from './create-multipla-escolha.dto';

describe('Create Multiple Choice Dto', () => {
  it('should not be empty', async () => {
    const dto = plainToInstance(CreateMultiplaEscolhaDto, {});
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
  });
});
