import { Module } from '@nestjs/common';
import { QuestaoService } from './questao.service';
import { QuestaoController } from './questao.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [QuestaoController],
  providers: [QuestaoService],
})
export class QuestaoModule {}
