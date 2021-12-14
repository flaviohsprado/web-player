import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Album } from '../../../data/entities/album.entity';
import { IAlbum } from '../../../main/interfaces/album.interface';
import FileUpload from '../../../main/utils/file.utils';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
import { IFile } from '../../../main/interfaces/file.interface';
import { AlbumDTO } from './dto/album.dto';

@Injectable()
export class AlbumService {
  constructor(
    @Inject('ALBUM_REPOSITORY')
    private albumRepository: Repository<Album>,
    private fileRepository: FileService,
  ) {}

  public async findAll(): Promise<IAlbum[]> {
    const albums = await this.albumRepository.find();

    for (const album of albums) {
      let albumAux = new AlbumDTO({ ...album });
      albumAux.cover = await this.fileRepository.findByKey('ownerId', album.id);

      Object.assign(album, albumAux);
    }

    return albums;
  }

  public async findByKey(key: string, value: string): Promise<IAlbum> {
    const album = new AlbumDTO(
      await this.albumRepository.findOne({
        where: { [key]: value },
      }),
    );

    let albumAux: IAlbum;

    if (album)
      albumAux.cover = await this.fileRepository.findByKey('ownerId', album.id);

    Object.assign(album, albumAux);

    return album;
  }

  public async create(album: AlbumDTO, files: FileDTO[]): Promise<IAlbum> {
    const filesPaths = await FileUpload.upload(files, album.id, 'album');

    await this.fileRepository.create(filesPaths);

    return await this.albumRepository.save(album);
  }

  public async update(
    id: string,
    album: AlbumDTO,
    files: FileDTO[],
  ): Promise<IAlbum> {
    const albumCover: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    if (files.length) {
      if (albumCover) {
        await FileUpload.delete([albumCover.key]);
        await this.fileRepository.destroy([albumCover]);
      }

      const filesPaths = await FileUpload.upload(files, id, 'album');
      await this.fileRepository.create(filesPaths);
    }

    await this.albumRepository.save({ ...album, id });

    return await this.albumRepository.findOne(id);
  }

  public async destroy(id: string): Promise<void> {
    const albumCover: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    await FileUpload.delete([albumCover.key]);

    await this.fileRepository.destroy([albumCover]);

    await this.albumRepository.delete(id);
  }
}
