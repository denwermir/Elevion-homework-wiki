import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesService} from './aricles.service';

@Controller('files')
export class ArticlesController {
  constructor(private readonly filesService: ArticlesService) {}

  @Get('count-html')
  async countHtmlFiles(@Query('folder') folder: string) {
    return this.filesService.countHtmlFiles(folder);
  }
}