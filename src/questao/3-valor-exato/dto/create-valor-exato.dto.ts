import { PickType } from '@nestjs/mapped-types';
import { ValorExatoEntity } from '../entities/valor-exato.entity';

export class CreateValorExatoDto extends PickType(ValorExatoEntity, [
  'id',
  'gabarito',
  'idQuestao',
]) {}
