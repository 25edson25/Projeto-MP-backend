import { Module } from '@nestjs/common';
import { MultiplaEscolhaService } from './multipla-escolha.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MultiplaEscolhaService],
  exports: [MultiplaEscolhaService],
})
export class MultiplaEscolhaModule {}
