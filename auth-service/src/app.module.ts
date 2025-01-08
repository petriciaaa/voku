import { Module } from '@nestjs/common';
// import { AuthModule } from '@/core/auth/auth.module';
import { UserModule } from '@/core/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
})
export class AppModule {}
