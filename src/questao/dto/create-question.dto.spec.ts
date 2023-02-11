import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateMultipleChoice } from './create-questao.dto';

describe('Create Multiple Choice Dto', () => {
  it('should return a Exception', async () => {
    const createMultipleChoiceDto = plainToInstance(CreateMultipleChoice, {});
    console.log(createMultipleChoiceDto);
    const errors = await validate(createMultipleChoiceDto);
    expect(errors.length).not.toBe(0);
  });
});
