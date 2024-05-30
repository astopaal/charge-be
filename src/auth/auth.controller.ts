import { Controller, HttpException, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import AuthPayloadDto from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req) {
      return req.user;
    } 

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req) {
      console.log('Inside AuthController status method');
      console.log(req.user);
      return req.user;
    }
}
