import { Module } from '@nestjs/common';
import { CertoOuErradoService } from './certo-ou-errado.service';
import { CertoOuErradoController } from './certo-ou-errado.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CertoOuErradoController],
  providers: [CertoOuErradoService],
  exports: [CertoOuErradoService],
})
export class CertoOuErradoModule {}
