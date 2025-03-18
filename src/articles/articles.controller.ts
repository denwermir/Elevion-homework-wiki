import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesService} from './aricles.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Динамическое добавление статей')
@Controller('files')
export class ArticlesController {
  constructor(private readonly filesService: ArticlesService) {}

  @ApiOperation({summary: 'Динамическое добавление статей'})
  @Get('count-html')
  async countHtmlFiles(@Query('folder') folder: string) {
    return this.filesService.countHtmlFiles(folder);
  }
}