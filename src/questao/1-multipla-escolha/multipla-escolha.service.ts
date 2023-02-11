import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

type MultiplaEscolhaModel = Prisma.MultiplaEscolhaDelegate<RejectOptions>;
const { defaultOptions, getCrud } =
  new CrudOptions<MultiplaEscolhaModel>().setOptions({});

@Injectable()
export class MultiplaEscolhaService extends getCrud<
  Prisma.MultiplaEscolhaGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.multiplaEscolha, defaultOptions);
  }
}
