import { Global, Module } from '@nestjs/common';
import { FileService } from './file.service';
import { fileProviders } from './file.provider';
import { DatabaseModule } from '../../../data/connection/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...fileProviders, FileService],
  exports: [FileService],
})
export class FileModule {}
