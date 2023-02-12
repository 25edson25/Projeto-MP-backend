import { PickType } from '@nestjs/mapped-types';
import { TurmaEntity } from '../entities/turma.entity';

export class UpdateTurmaDto extends PickType(TurmaEntity, [
  'id',
  'dataFim',
  'cpfProfessor',
]) {}
