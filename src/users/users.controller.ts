import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User) {
    try {
      return await this.usersService.create(user);
    } catch (error) {
      this.logger.error(`${user.id} id numarali kullanici kaydedilirken bir hata olustu. Hata : ${error}`);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Kullanici kaydedilirken bir hata olustu.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post('add-favorite')
  async addFavoriteToUser(
    @Body('userId') userId: string,
    @Body('stationId') stationId: string,
  ) {
    try {
      return await this.usersService.addFavorite(userId, stationId);
    } catch (error) {
      this.logger.error(`${stationId} id numarali istasyon kaydedilirken bir hata olustu. Kullanici id : ${userId} Hata :  ${error}`);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Favori istasyon kaydedilirken bir hata olustu.',
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
      return await this.usersService.findAll();
    } catch (error) {
      this.logger.error(`Kullanicilar getirilirken bir hata olustu. Hata : ${error}`);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Kullanicilar getirilirken bir hata olustu.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id/favorites')
  async getUserFavorites(@Param('id') userId: string) {
    try {
      return await this.usersService.getFavoritesByUserId(userId);
    } catch (error) {
      this.logger.error(`${userId} id numarali kullanici favorileri getirilirken bir hata olustu. Hata : ${error}`);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Kullanici favorileri getirilirken bir hata olustu.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') userId: string) {
    try {
      return await this.usersService.findOne(userId);
    } catch (error) {
      this.logger.error(`${userId} id numarali kullanici bilgileri getirilirken bir hata olustu. Hata : ${error}`);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Kullanici getirilirken bir hata olustu.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') userId: string) {
    try {
      return await this.usersService.deleteUserById(userId);
    } catch (error) {
      this.logger.error(`${userId} id numarali kullanici silinirken bir hata olustu. Hata : ${error}`);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Kullanici silinirken bir hata olustu.',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
