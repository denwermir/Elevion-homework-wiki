import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService){

    }

        async login(userDto: CreateUserDto){
            const user = await this.validateUser(userDto)
            //return this.generateToken(user)
            return user;

        }
    
        async registration(userDto: CreateUserDto){
            const candidate = await this.userService.getUserByEmail(userDto.email)
            if (candidate){
                throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST)
            }
            //const hashPassword = await bcrypt.hash(userDto.password, 5);
            //const user = await this.userService.createUser({...userDto, password: hashPassword})
            //return this.generateToken(user) 
            return candidate;

        }

        private async generateToken(user){
            const payload = {id: user.id, email: user.email, roles: user.roles}
            return {
                token: this.jwtService.sign(payload)
            }
        }

        private async validateUser (userDto: CreateUserDto){
            const user = await this.userService.getUserByEmail(userDto.email);
            const passwordEquals = await this.userService.getUserByPassword(userDto.password);
            if (user?.password == passwordEquals?.password)
            {
                return user;
            }
            else
            {
                throw new HttpException("Неккоректный email или пароль", HttpStatus.BAD_REQUEST)

            }
        }

}
