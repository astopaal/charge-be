import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Post('add-favorite')
  async addFavoriteToUser(
    @Body('userId') userId: string,
    @Body('stationId') stationId: string,
  ) {
    return this.usersService.addFavorite(userId, stationId);
  }

  @Get()
  async findAll() {
    try {
      let users = await this.usersService.findAll();
      console.log('====================================');
      console.log(users);
      console.log('====================================');
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
