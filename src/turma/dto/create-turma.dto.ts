import { PickType } from '@nestjs/mapped-types';
import { TurmaEntity } from '../entities/turma.entity';

export class CreateTurmaDto extends PickType(TurmaEntity, [
  'id',
  'dataFim',
  'cpfProfessor',
]) {}
