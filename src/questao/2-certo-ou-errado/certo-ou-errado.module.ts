import { Module } from '@nestjs/common';
import { CertoOuErradoService } from './certo-ou-errado.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CertoOuErradoService],
  exports: [CertoOuErradoService],
})
export class CertoOuErradoModule {}
