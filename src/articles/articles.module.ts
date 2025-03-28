import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './aricles.service';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}