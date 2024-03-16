import { Controller, HttpException, Post, Body, UseGuards } from '@nestjs/common';
import AuthPayloadDto from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Body() authPayload: AuthPayloadDto) {
        const user = this.authService.validateUser(authPayload)
        return user
    }  

}
