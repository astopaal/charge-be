import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from '../../dto/station.interface';

@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  async createStation(@Body() stationData: Station): Promise<Station> {
    return this.stationService.createStation(stationData);
  }

  @Get(':id')
  async findStationById(@Param('id') id: string): Promise<Station> {
    console.error('ISTEK GONDERILDI');
    return this.stationService.findStationById(id);
  }

  @Get()
  async findAllStations(): Promise<Station[]> {
    console.error('ISTEK GONDERILDI');
    return this.stationService.findAllStations();
  }
}
