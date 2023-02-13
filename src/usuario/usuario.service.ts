import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Papel, Prisma, Usuario } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { roles } from 'src/app.role';

type UsuarioModel = Prisma.UsuarioDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<UsuarioModel>().setOptions({
  select: {
    cpf: true,
    dataNascimento: true,
    email: true,
    nome: true,
    roles: true,
  },
});

@Injectable()
export class UsuarioService {
  constructor(protected readonly prisma: PrismaService) {}

  async create(usuarioArgs: Prisma.UsuarioCreateArgs['data']) {
    return await this.prisma.usuario.create({
      data: usuarioArgs
    })
  }

  async findOne(cpf: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { cpf },
      include: { roles: true },
    });

    if (!user) throw new NotFoundException('Usuario nao Encontrado');

    return user;
  }

  async findAll(){
    return await this.prisma.usuario.findMany({
     include:{roles:true} 
    })
  }

  async remove (cpf: string) {
    return await this.prisma.usuario.delete({
      where:{cpf}
    })
  }

  async findByEmail(email: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException('Usuario nao encontrado');
    return user;
  }
}
