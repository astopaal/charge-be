import { Injectable } from '@nestjs/common';
import { User } from './dto/create-user.dto';
import Station from '../stations/dto/create-station.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: User) {
    const userCreateInput = {
      email: dto.email,
      name: dto.name,
      birthYear: dto.birthYear,
      hashedPassword: dto.hashedPassword,
      favorites: dto.favorites,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };

    return await this.prisma.user.create({
      data: userCreateInput,
    });
  }

  async addFavorite(userId: string, stationId: string): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { favorites: { push: stationId } },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(_id: string) {
    return this.prisma.user.findUnique({
      where: { id: _id },
    });
  }

  update(id: number, user: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
