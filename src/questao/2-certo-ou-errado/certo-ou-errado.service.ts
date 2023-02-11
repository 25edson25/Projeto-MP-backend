import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

type CertoOuErradoModel = Prisma.CertoOuErradoDelegate<RejectOptions>;
const { defaultOptions, getCrud } =
  new CrudOptions<CertoOuErradoModel>().setOptions({});

@Injectable()
export class CertoOuErradoService extends getCrud<
  Prisma.CertoOuErradoGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.certoOuErrado, defaultOptions);
  }
}
