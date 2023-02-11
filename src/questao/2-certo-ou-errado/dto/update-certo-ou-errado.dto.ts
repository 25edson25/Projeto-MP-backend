import { PickType } from '@nestjs/mapped-types';
import { CertoOuErradoEntity } from '../entities/certo-ou-errado.entity';

export class UpdateCertoOuErradoDto extends PickType(CertoOuErradoEntity, [
  'id',
  'gabarito',
  'idQuestao',
]) {}
