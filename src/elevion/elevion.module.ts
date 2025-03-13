import { Module } from '@nestjs/common';
import { ElevionService } from './elevion.service';
import { ElevionController } from './elevion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Roles } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [ElevionController],
  providers: [ElevionService],
  imports: [
    SequelizeModule.forFeature([User, Roles, UserRoles]),
    RolesModule
  ]
  
})
export class ElevionModule {}
