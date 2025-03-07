import { Injectable } from '@nestjs/common';
import { CreateElevionDto } from './dto/create-elevion.dto';
import { UpdateElevionDto } from './dto/update-elevion.dto';

@Injectable()
export class ElevionService {
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
  }
}
