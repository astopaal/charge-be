import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StationService {
  constructor(private prisma: PrismaService) {}

  async createStation(data: any): Promise<any> {
    return this.prisma.station.create({
      data,
    });
  }

  async findStationById(stationId: string): Promise<any> {
    return this.prisma.station.findUnique({
      where: { id: stationId },
    });
  }
  async findAllStations(): Promise<any[]> {
    return this.prisma.station.findMany();
  }
}
