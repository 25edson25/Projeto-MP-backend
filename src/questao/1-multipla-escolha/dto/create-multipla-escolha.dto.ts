import { PickType } from '@nestjs/mapped-types';
import { MultiplaEscolhaEntity } from '../entities/multipla-escolha.entity';

export class CreateMultiplaEscolhaDto extends PickType(MultiplaEscolhaEntity, [
  'id',
  'itemA',
  'itemB',
  'itemC',
  'itemD',
  'idGabarito',
  'idQuestao',
]) {}
