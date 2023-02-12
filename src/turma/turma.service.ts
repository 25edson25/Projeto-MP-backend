import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type TurmaModel = Prisma.TurmaDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<TurmaModel>().setOptions(
  {},
);

@Injectable()
export class TurmaService extends getCrud<
  Prisma.TurmaGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.turma, defaultOptions);
  }
}
