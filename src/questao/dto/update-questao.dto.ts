import { PickType } from '@nestjs/mapped-types';
import { QuestaoEntity } from '../entities/questao.entity';

export class UpdateQuestaoDto extends PickType(QuestaoEntity, [
  'id',
  'enunciado',
  'cpfAutor',
]) {}
