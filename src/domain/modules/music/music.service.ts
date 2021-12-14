import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Music } from '../../../data/entities/music.entity';
import { MusicDTO } from './dto/music.dto';
import { IMusic } from '../../../main/interfaces/music.interface';
import FileUpload from '../../../main/utils/file.utils';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
import { IFile } from '../../../main/interfaces/file.interface';
import StandardError from '../../../main/utils/error.utils';

@Injectable()
export class MusicService {
  constructor(
    @Inject('MUSIC_REPOSITORY')
    private musicRepository: Repository<Music>,
    private fileRepository: FileService,
  ) {}

  public async findAll(): Promise<IMusic[]> {
    const musics = await this.musicRepository.find();

    for (const music of musics) {
      let musicAux = new MusicDTO({ ...music });
      musicAux.file = await this.fileRepository.findByKey('ownerId', music.id);

      Object.assign(music, musicAux);
    }

    return musics;
  }

  public async findByKey(key: string, value: string): Promise<IMusic> {
    const music = new MusicDTO(
      await this.musicRepository.findOne({
        where: { [key]: value },
      }),
    );

    let musicAux: IMusic;

    if (music)
      musicAux.file = await this.fileRepository.findByKey('ownerId', music.id);

    Object.assign(music, musicAux);

    return music;
  }

  public async create(music: MusicDTO, files: FileDTO[]): Promise<IMusic> {
    const filesPaths = await FileUpload.upload(files, music.id, 'music');

    await this.fileRepository.create(filesPaths);

    return await this.musicRepository.save(music);
  }

  public async update(
    id: string,
    music: MusicDTO,
    files: FileDTO[],
  ): Promise<IMusic> {
    const musicFile: IFile = await this.fileRepository.findByKey('ownerId', id);

    if (files.length) {
      if (musicFile) {
        await FileUpload.delete([musicFile.key]);
        await this.fileRepository.destroy([musicFile]);
      }

      const filesPaths = await FileUpload.upload(files, id, 'music');
      await this.fileRepository.create(filesPaths);
    }

    await this.musicRepository.save({ ...music, id });

    return await this.musicRepository.findOne(id);
  }

  public async destroy(id: string): Promise<void> {
    const musicFile: IFile = await this.fileRepository.findByKey('ownerId', id);

    await FileUpload.delete([musicFile.key]);

    await this.fileRepository.destroy([musicFile]);

    await this.musicRepository.delete(id);
  }
}
