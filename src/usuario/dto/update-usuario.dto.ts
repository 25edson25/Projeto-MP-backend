import { PickType } from '@nestjs/mapped-types';
import { UsuarioEntity } from '../entities/usuario.entity';

export class UpdateUsuarioDto extends PickType(UsuarioEntity, [
  'cpf',
  'nome',
  'email',
  'senha',
  'dataNascimento',
]) {}
