import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { playlistProviders } from './playlist.provider';
import { DatabaseModule } from '../../../data/connection/database.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [DatabaseModule, FileModule],
  controllers: [PlaylistController],
  providers: [...playlistProviders, PlaylistService],
  exports: [...playlistProviders, PlaylistService],
})
export class PlaylistModule {}
