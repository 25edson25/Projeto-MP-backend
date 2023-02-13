import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateQuestaoDto } from './create-questao.dto';

describe('Create Question ', () => {
  it('should not be empty', async () => {
    const dto = plainToInstance(CreateQuestaoDto, {});
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
  });
});
