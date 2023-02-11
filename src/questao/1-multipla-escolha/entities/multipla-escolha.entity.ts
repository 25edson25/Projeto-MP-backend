import { MultiplaEscolha } from '@prisma/client';
import { IsIn, IsNumber, IsString } from 'class-validator';

export class MultiplaEscolhaEntity implements MultiplaEscolha {
  @IsNumber()
  id: number;
  @IsString()
  itemA: string;
  @IsString()
  itemB: string;
  @IsString()
  itemC: string;
  @IsString()
  itemD: string;
  @IsIn([1, 2, 3, 4])
  idGabarito: 1 | 2 | 3 | 4;
  @IsNumber()
  idQuestao: number;
}
