import { Injectable, Logger } from '@nestjs/common'
import Station from './dto/create-station.dto'
import { PrismaService } from 'src/services/prisma/prisma.service'

@Injectable()
export class StationsService {
  logger : Logger
  constructor(private prisma: PrismaService) {
    this.logger = new Logger(StationsService.name)
  }

  async create(dto: Station) {
    const stationCreateInput = {
      name: dto.name,
      latitude: dto.latitude,
      longitude: dto.longitude,
      createdBy: dto.creatorUserId
        ? { connect: { id: dto.creatorUserId } }
        : undefined,
    }
    return await this.prisma.station.create({
      data: stationCreateInput,
    })
  }

  async findAll() {
    return await this.prisma.station.findMany()
  }

  async findOne(stationId: string) {
    return await this.prisma.station.findUnique({
      where: { id: stationId },
    })
  }

  async remove(stationId: string) {
    return await this.prisma.station.delete({
      where : {
        id : stationId
      }
    })
  }
}
