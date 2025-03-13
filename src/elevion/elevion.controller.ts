import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElevionService } from './elevion.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';

@ApiTags('Данные')
@Controller('elevion')
export class ElevionController {
  constructor(private elevionService: ElevionService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.elevionService.createUser(userDto);
  }

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll(){
    return this.elevionService.getAllUsers();
  }

/*
  @Post()
  create(@Body() createElevionDto: CreateElevionDto) {
    return this.elevionService.create(createElevionDto);
  }

  @Get()
  findAll() {
    return this.elevionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elevionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElevionDto: UpdateElevionDto) {
    return this.elevionService.update(+id, updateElevionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elevionService.remove(+id);
  }*/
}
