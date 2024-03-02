import { Injectable } from '@nestjs/common';
import Station from './dto/create-station.dto';
import { User } from '../users/dto/create-user.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class StationsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: Station) {
    const stationCreateInput = {
      name: dto.name,
      latitude: dto.latitude,
      longitude: dto.longitude,
      createdBy: dto.creatorUserId
        ? { connect: { id: dto.creatorUserId } }
        : undefined,
    };

    return await this.prisma.station.create({
      data: stationCreateInput,
    });
  }

  async findAll() {
    return await this.prisma.station.findMany();
  }

  findOne(_id: string) {
    return this.prisma.user.findUnique({
      where: { id: _id },
    });
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return `This action updates a #${id} station`;
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
