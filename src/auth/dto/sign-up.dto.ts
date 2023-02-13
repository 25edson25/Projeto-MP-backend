import { IsIn, IsNumber } from 'class-validator';
import { CreateUsuarioDto } from '../../usuario/dto/create-usuario.dto';

export class SignUpDto extends CreateUsuarioDto {
  @IsIn([2, 3])
  roles: 2 | 3;
}
