import { PickType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { ProvaEntity } from '../entities/prova.entity';

class Id {
  @IsNumber()
  id: number
}

export class CreateProvaDto extends PickType(ProvaEntity, [
  'horarioInicio',
  'horarioFim',
]) {
  @IsArray()
  @ValidateNested({each:true})
  @Type(()=>Id)
  questoesIds: Id[]
}


