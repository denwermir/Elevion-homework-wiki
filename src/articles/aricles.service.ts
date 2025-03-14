import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ArticlesService {
  //private readonly folderPath = path.join(__dirname, '..', 'article'); // Путь к папке
  private readonly folderPath = path.join('C:/Users/User/Desktop/test/Elevion-homework-wiki-1/Elevion-homework-wiki/public/articles'); // Путь к папке

  countHtmlFiles(folderPath: string): { count: number; files: string[] } {
    try {
      const files = fs.readdirSync(folderPath);
      const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');
      return {
        count: htmlFiles.length,
        files: htmlFiles,
      };
    } catch (error) {
      throw new Error(`Ошибка при чтении папки: ${error.message}`);
    }
  }
}