import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../dto/user.interface'; // Adjust the import path as necessary

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    console.error("ISTEK GONDERILDI");
    return this.userService.findUserById(id);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    console.error("ISTEK GONDERILDI");
    return this.userService.findAllUsers();
  }
}
