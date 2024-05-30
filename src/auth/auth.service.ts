import { Injectable } from '@nestjs/common';
import AuthPayloadDto from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async validateUser({email, hashedPassword} : AuthPayloadDto) {
    console.log("in validate user")
    const findUser = await this.prisma.user.findFirst({
      where: {
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    console.log(findUser)
    if (!findUser) { 
      console.log("User not found")
      return null 
    } else {
      console.log("User found, generating token")
      return this.jwtService.sign({ id: findUser.id, email: findUser.email });
    }
  }
}

