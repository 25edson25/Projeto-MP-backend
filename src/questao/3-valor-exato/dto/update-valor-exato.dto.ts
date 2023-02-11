import { PickType } from '@nestjs/mapped-types';
import { ValorExatoEntity } from '../entities/valor-exato.entity';

export class UpdateValorExatoDto extends PickType(ValorExatoEntity, [
  'id',
  'gabarito',
  'idQuestao',
]) {}
