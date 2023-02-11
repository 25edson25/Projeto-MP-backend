import { Module } from '@nestjs/common';
import { QuestaoService } from './questao.service';
import { QuestaoController } from './questao.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MultiplaEscolhaModule } from './1-multipla-escolha/multipla-escolha.module';
import { CertoOuErradoModule } from './2-certo-ou-errado/certo-ou-errado.module';
import { ValorExatoModule } from './3-valor-exato/valor-exato.module';

@Module({
  imports: [
    PrismaModule,
    MultiplaEscolhaModule,
    CertoOuErradoModule,
    ValorExatoModule,
  ],
  controllers: [QuestaoController],
  providers: [QuestaoService],
})
export class QuestaoModule {}
