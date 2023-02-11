import { PickType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { CreateMultiplaEscolhaDto } from '../1-multipla-escolha/dto/create-multipla-escolha.dto';
import { CreateCertoOuErradoDto } from '../2-certo-ou-errado/dto/create-certo-ou-errado.dto';
import { CreateValorExatoDto } from '../3-valor-exato/dto/create-valor-exato.dto';
import { QuestaoEntity } from '../entities/questao.entity';

export class CreateQuestaoDto extends PickType(QuestaoEntity, [
  'enunciado',
  'cpfAutor',
]) {}

export class CreateMultipleChoice extends CreateQuestaoDto {
  @ValidateNested()
  multiplaEscolha: Omit<CreateMultiplaEscolhaDto, 'idQuestao'>;
}

export class CreateTrueOrFalse extends CreateQuestaoDto {
  @ValidateNested()
  certoOuErrado: Omit<CreateCertoOuErradoDto, 'idQuestao'>;
}

export class CreateExactValue extends CreateQuestaoDto {
  @ValidateNested()
  valorExato: Omit<CreateValorExatoDto, 'idQuestao'>;
}
