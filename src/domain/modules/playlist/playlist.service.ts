import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Playlist } from '../../../data/entities/playlist.entity';
import { PlaylistDTO } from './dto/playlist.dto';
import { IPlaylist } from '../../../main/interfaces/playlist.interface';
import FileUpload from '../../../main/utils/file.utils';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
import { IFile } from '../../../main/interfaces/file.interface';
import StandardError from '../../../main/utils/error.utils';

@Injectable()
export class PlaylistService {
  constructor(
    @Inject('PLAYLIST_REPOSITORY')
    private playlistRepository: Repository<Playlist>,
    private fileRepository: FileService,
  ) {}

  public async findAll(): Promise<IPlaylist[]> {
    const playlists = await this.playlistRepository.find();

    for (const playlist of playlists) {
      let playlistAux = new PlaylistDTO({ ...playlist });
      playlistAux.cover = await this.fileRepository.findByKey(
        'ownerId',
        playlist.id,
      );

      Object.assign(playlist, playlistAux);
    }

    return playlists;
  }

  public async findByKey(key: string, value: string): Promise<IPlaylist> {
    const playlist = new PlaylistDTO(
      await this.playlistRepository.findOne({
        where: { [key]: value },
      }),
    );

    let playlistAux: IPlaylist;

    if (playlist)
      playlistAux.cover = await this.fileRepository.findByKey(
        'ownerId',
        playlist.id,
      );

    Object.assign(playlist, playlistAux);

    return playlist;
  }

  public async create(
    playlist: PlaylistDTO,
    files: FileDTO[],
  ): Promise<IPlaylist> {
    const filesPaths = await FileUpload.upload(files, playlist.id, 'playlist');

    await this.fileRepository.create(filesPaths);

    return await this.playlistRepository.save(playlist);
  }

  public async update(
    id: string,
    playlist: PlaylistDTO,
    files: FileDTO[],
  ): Promise<IPlaylist> {
    const playlistFile: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    if (files.length) {
      if (playlistFile) {
        await FileUpload.delete([playlistFile.key]);
        await this.fileRepository.destroy([playlistFile]);
      }

      const filesPaths = await FileUpload.upload(files, id, 'playlist');
      await this.fileRepository.create(filesPaths);
    }

    await this.playlistRepository.save({ ...playlist, id });

    return await this.playlistRepository.findOne(id);
  }

  public async destroy(id: string): Promise<void> {
    const playlistFile: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    await FileUpload.delete([playlistFile.key]);

    await this.fileRepository.destroy([playlistFile]);

    await this.playlistRepository.delete(id);
  }
}
