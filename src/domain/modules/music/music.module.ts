import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { musicProviders } from './music.provider';
import { DatabaseModule } from '../../../data/connection/database.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [DatabaseModule, FileModule],
  controllers: [MusicController],
  providers: [...musicProviders, MusicService],
  exports: [...musicProviders, MusicService],
})
export class MusicModule {}
