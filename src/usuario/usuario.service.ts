import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma, Usuario } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { roles } from 'src/app.role';

type UsuarioModel = Prisma.UsuarioDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<UsuarioModel>().setOptions(
  {select:{cpf:true, dataNascimento:true, email:true, nome:true, roles:true}},
);

@Injectable()
export class UsuarioService extends getCrud<
  Prisma.UsuarioGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.usuario, defaultOptions);
  }

  async findByEmail(email: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException('Usuario nao encontrado');
    return user;
  }
}
