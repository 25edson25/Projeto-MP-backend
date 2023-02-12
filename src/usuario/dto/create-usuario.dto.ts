import { PickType } from '@nestjs/mapped-types';
import { UsuarioEntity } from '../entities/usuario.entity';

export class CreateUsuarioDto extends PickType(UsuarioEntity, [
  'cpf',
  'nome',
  'email',
  'senha',
  'dataNascimento',
]) {}
