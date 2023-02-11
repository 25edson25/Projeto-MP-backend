import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

type ValorExatoModel = Prisma.ValorExatoDelegate<RejectOptions>;
const { defaultOptions, getCrud } =
  new CrudOptions<ValorExatoModel>().setOptions({});

@Injectable()
export class ValorExatoService extends getCrud<
  Prisma.ValorExatoGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.valorExato, defaultOptions);
  }
}
