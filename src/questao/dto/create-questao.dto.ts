import { PickType } from '@nestjs/mapped-types';
import { CreateMultiplaEscolhaDto } from '../1-multipla-escolha/dto/create-multipla-escolha.dto';
import { QuestaoEntity } from '../entities/questao.entity';

export class CreateQuestaoDto extends PickType(QuestaoEntity, [
  'enunciado',
  'cpfAutor',
]) {}

export class CreateMultipleChoice extends CreateQuestaoDto {
  multiplaEscolha: Omit<CreateMultiplaEscolhaDto, 'idQuestao'>;
}
