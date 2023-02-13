import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsDefined, IsInt, IsNumber, ValidateNested } from 'class-validator';


class Id {
  @IsNumber()
  id:number
}

class GabaritoMultiplaEscolha {
  @IsDefined()
  @ValidateNested()
  @Type(()=> Id)
  gabarito : Id 
}

class GabaritoCertoOuErrado {
  @IsBoolean()
  @IsDefined()
  gabarito : boolean
}

class GabaritoValorExato {
  @IsInt()
  gabarito : number
}

class Questao implements Prisma.QuestaoGetPayload<{
  select: {
    id: true;
    multiplaEscolha: { select: { gabarito: {select:{id:true}} } };
    certoOuErrado: { select: { gabarito: true } };
    valorExato: { select: { gabarito: true } };
  };
}> {
  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(()=>GabaritoMultiplaEscolha)
  multiplaEscolha: GabaritoMultiplaEscolha;

  @ValidateNested()
  @Type(()=>GabaritoCertoOuErrado)
  certoOuErrado: GabaritoCertoOuErrado;

  @ValidateNested()
  @Type(()=>GabaritoValorExato)
  valorExato: GabaritoValorExato;
}

export class CorrigeProvaDto {
  @ValidateNested({each:true})
  @Type(()=> Questao)
  questoes: Questao[];
}

