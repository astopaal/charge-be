import { Injectable } from '@nestjs/common';
import AuthPayloadDto from './dto/auth.dto';
import { identity } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

const users = [
    {
        id : 1,
        username : "SAMET",
        password : "SAMET"
    }
]

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {

    }


    validateUser({username, password} : AuthPayloadDto) {
        const findUser = users.find((user) => user.username === username)
        if(!findUser) return null;
        if(password === findUser.password) {
            const {password, ...user} = findUser;
            return this.jwtService.sign(user)
        }
    }
}
