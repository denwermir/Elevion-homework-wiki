import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { User } from './user.model';
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) 
    private userRepository: typeof User, 
    private roleService: RolesService
  ){}

  async createUser(dto: CreateUserDto)/*: Promise<User>*/ {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("User")
    await user.$set('roles', [role?.id])
    user.roles = [role?.id]
    return user; //this.userRepository.create(dto);
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include: {all: true}});
    return users;
  }

  async getUserByEmail(email: string){
    const user = await this.userRepository.findOne({where: {email}/*, include: {all: true}*/})
    return user;
  }

  async getUserByPassword(password: string){
    const user = await this.userRepository.findOne({where: {password}})
    return user;
  }
}