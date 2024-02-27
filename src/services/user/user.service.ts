import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: any): Promise<any> {
    return this.prisma.user.create({
      data,
    });
  }

  async findUserById(userId: string): Promise<any> {
    console.log("SERVICE CALISTI");
    
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async findAllUsers(): Promise<any[]> {
    return this.prisma.user.findMany();
  }

}