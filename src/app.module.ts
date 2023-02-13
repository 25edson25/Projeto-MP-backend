import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QuestaoModule } from './questao/questao.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.role';

@Module({
  imports: [
    PrismaModule,
    QuestaoModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AccessControlModule.forRoles(roles)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
