import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type UsuarioModel = Prisma.UsuarioDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<UsuarioModel>().setOptions(
  {},
);

@Injectable()
export class UsuarioService extends getCrud<
  Prisma.UsuarioGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.usuario, defaultOptions);
  }
}
