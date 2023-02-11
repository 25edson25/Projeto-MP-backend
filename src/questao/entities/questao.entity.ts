import { Questao } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class QuestaoEntity implements Questao {
  @IsNumber()
  id: number;
  @IsString()
  enunciado: string;
  @IsString()
  cpfAutor: string;
}
