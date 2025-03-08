import { Injectable } from '@nestjs/common';
import { CreateElevionDto } from './dto/create-elevion.dto';
import { UpdateElevionDto } from './dto/update-elevion.dto';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class ElevionService {

  constructor(
    @InjectModel(User) 
    private userRepository: typeof User
  ){}

  async createUser(dto: CreateUserDto)/*: Promise<User>*/ {
    const user = this.userRepository.create(dto);
    return this.userRepository.create(dto);
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
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
