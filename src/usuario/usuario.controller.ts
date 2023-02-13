import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ACGuard, UseRoles } from 'nest-access-control';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UseGuards(AuthGuard('jwt'),ACGuard)
  @UseRoles({
    action:'read',
    possession: 'any',
    resource: 'usuario'
  })
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.usuarioService.findOne(cpf);
  }

  @Delete(':cpf')
  remove(@Param('cpf') cpf: string) {
    return this.usuarioService.remove(cpf);
  }
}
