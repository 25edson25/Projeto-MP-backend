import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QuestaoModule } from './questao/questao.module';

@Module({
  imports: [PrismaModule, QuestaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
