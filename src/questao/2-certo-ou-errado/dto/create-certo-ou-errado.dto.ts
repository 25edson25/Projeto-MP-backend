import { PickType } from '@nestjs/mapped-types';
import { CertoOuErradoEntity } from '../entities/certo-ou-errado.entity';

export class CreateCertoOuErradoDto extends PickType(CertoOuErradoEntity, [
  'gabarito',
  'idQuestao',
]) {}
