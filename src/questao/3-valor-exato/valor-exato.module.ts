import { Module } from '@nestjs/common';
import { ValorExatoService } from './valor-exato.service';
import { ValorExatoController } from './valor-exato.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ValorExatoController],
  providers: [ValorExatoService],
  exports: [ValorExatoService],
})
export class ValorExatoModule {}
