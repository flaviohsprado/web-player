import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { playlistProviders } from './playlist.provider';
import { DatabaseModule } from '../../../data/connection/database.module';
import { FileModule } from '../file/file.module';
import { MusicModule } from '../music/music.module';

@Module({
  imports: [DatabaseModule, FileModule, MusicModule],
  controllers: [PlaylistController],
  providers: [...playlistProviders, PlaylistService],
  exports: [...playlistProviders, PlaylistService],
})
export class PlaylistModule {}
