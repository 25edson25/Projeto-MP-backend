import { Usuario } from '@prisma/client';
import { IsDate, IsEmail, IsString } from 'class-validator';


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
  dataNascimento: Date;
}
