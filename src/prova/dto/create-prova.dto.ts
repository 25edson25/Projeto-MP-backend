import { PickType } from '@nestjs/mapped-types';
import { ProvaEntity } from '../entities/prova.entity';

export class CreateProvaDto extends PickType(ProvaEntity, [
  'id',
  'horarioInicio',
  'horarioFim',
]) {}
