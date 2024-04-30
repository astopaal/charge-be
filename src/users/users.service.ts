import { Injectable } from '@nestjs/common';
import { User } from './dto/create-user.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(dto: User) {
    const userCreateInput = {
      email: dto.email,
      name: dto.name,
      birthYear: dto.birthYear,
      hashedPassword: dto.hashedPassword,
      favorites: dto.favorites,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };

    return this.prisma.user.create({
      data: userCreateInput,
    });
  }

  async addFavorite(userId: string, stationId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { favorites: { push: stationId } },
    });
  }

  async getFavoritesByUserId(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { favorites: true },
    });
    (await user?.favorites) ?? null;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(userId: string) {
    await this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async deleteUserById(userId: string) {
    await this.prisma.user.delete({
      where: { id: userId },
    });
  }
}
