import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/generated/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    console.log('prisma module initialized.');
    await this.$connect();
  }

  async onModuleDestroy() {
    console.log('prisma module destroyed.');
    await this.$disconnect();
  }
}
