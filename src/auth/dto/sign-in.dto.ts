import { PickType } from '@nestjs/mapped-types';
import { UsuarioEntity } from '../../usuario/entities/usuario.entity';

export class SignInDto extends PickType(UsuarioEntity, ['email', 'senha']) {}
