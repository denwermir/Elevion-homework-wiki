import { Module } from '@nestjs/common';
import { ElevionService } from './elevion.service';
import { ElevionController } from './elevion.controller';

@Module({
  controllers: [ElevionController],
  providers: [ElevionService],
})
export class ElevionModule {}
