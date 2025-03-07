import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElevionService } from './elevion.service';
import { CreateElevionDto } from './dto/create-elevion.dto';
import { UpdateElevionDto } from './dto/update-elevion.dto';

@Controller('elevion')
export class ElevionController {
  constructor(private readonly elevionService: ElevionService) {}

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
  }
}
