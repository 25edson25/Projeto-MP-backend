import { Module } from '@nestjs/common';
import { ProvaService } from './prova.service';
import { ProvaController } from './prova.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProvaController],
  providers: [ProvaService],
})
export class ProvaModule {}
