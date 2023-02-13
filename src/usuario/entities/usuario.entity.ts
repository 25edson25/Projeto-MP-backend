import { Usuario } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsDateString, IsEmail, IsString } from 'class-validator';


export class UsuarioEntity implements Usuario {
  @IsString()
  cpf: string;
  @IsString()
  nome: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
  @IsDate()
  @Type(()=>Date)
  dataNascimento: Date;
}
