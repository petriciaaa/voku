// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServersModule } from './modules/servers/servers.module';

@Module({
  imports: [UsersModule, PrismaModule, ServersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
