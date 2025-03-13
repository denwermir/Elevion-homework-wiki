import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class ElevionService {

  constructor(
    @InjectModel(User) 
    private userRepository: typeof User, 
    private roleService: RolesService
  ){}

  async createUser(dto: CreateUserDto)/*: Promise<User>*/ {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("User")
    await user.$set('roles', [role?.id])
    return user; //this.userRepository.create(dto);
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include: {all: true}});
    return users;
  }

/*
  create(createElevionDto: CreateElevionDto) {
    return 'This action adds a new elevion';
  }

  findAll() {
    return `This action returns all elevion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} elevion`;
  }

  update(id: number, updateElevionDto: UpdateElevionDto) {
    return `This action updates a #${id} elevion`;
  }

  remove(id: number) {
    return `This action removes a #${id} elevion`;
  }*/
}
