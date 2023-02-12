import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type ProvaModel = Prisma.ProvaDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<ProvaModel>().setOptions(
  {},
);

@Injectable()
export class ProvaService extends getCrud<
  Prisma.ProvaGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.prova, defaultOptions);
  }
}
