import { Module } from '@nestjs/common';
import { ValorExatoService } from './valor-exato.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ValorExatoService],
  exports: [ValorExatoService],
})
export class ValorExatoModule {}
