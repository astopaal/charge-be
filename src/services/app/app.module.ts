import { Module } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { UsersController } from '../../users/users.controller';
import { StationsService } from '../../stations/stations.service';
import { StationsController } from '../../stations/stations.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UsersController, StationsController],
  providers: [UsersService, StationsService, PrismaService],
})
export class AppModule {}
