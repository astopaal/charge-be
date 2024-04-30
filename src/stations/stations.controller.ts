import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { StationsService } from './stations.service';
import Station from './dto/create-station.dto';

@Controller('stations')
export class StationsController {
  logger = new Logger(StationsController.name);
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  async create(@Body() station: Station) {
    try {
      return await this.stationsService.create(station);
    } catch (error) {
      this.logger.error(
        `${station.id} id numarali istasyon kaydedilirken bir hata olustu. Hata : ${error}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.stationsService.findAll();
    } catch (error) {
      this.logger.error(
        `Istasyonlar getirilirken bir hata olustu. Hata : ${error}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.stationsService.findOne(id);
    } catch (error) {
      this.logger.error(
        `${id} id numarali istasyon bilgileri getirilirken bir hata olustu. Hata : ${error}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.stationsService.remove(id);
    } catch (error) {
      this.logger.error(
        `${id} id numarali istasyon silinirken bir olustu. Hata : ${error}`,
      );
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
