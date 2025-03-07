import { PartialType } from '@nestjs/mapped-types';
import { CreateElevionDto } from './create-elevion.dto';

export class UpdateElevionDto extends PartialType(CreateElevionDto) {}
