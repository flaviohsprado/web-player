import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { albumProviders } from './album.provider';
import { DatabaseModule } from '../../../data/connection/database.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [DatabaseModule, FileModule],
  controllers: [AlbumController],
  providers: [...albumProviders, AlbumService],
  exports: [...albumProviders, AlbumService],
})
export class AlbumModule {}
