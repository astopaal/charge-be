import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: any) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string) {
    console.error("ISTEK GONDERILDI")
    return this.userService.findUserById(id);
  }

  @Get()
  async findAllUsers() {
    console.error("ISTEK GONDERILDI")
    return this.userService.findAllUsers();
  }
}
