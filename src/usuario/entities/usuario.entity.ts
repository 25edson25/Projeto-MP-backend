import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  cpf: string;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
}
