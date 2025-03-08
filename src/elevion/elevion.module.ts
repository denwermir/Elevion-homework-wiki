import { Module } from '@nestjs/common';
import { ElevionService } from './elevion.service';
import { ElevionController } from './elevion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';

@Module({
  controllers: [ElevionController],
  providers: [ElevionService],
  imports: [
    SequelizeModule.forFeature([User])
  ]
  
})
export class ElevionModule {}
