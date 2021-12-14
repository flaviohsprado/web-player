import { Repository } from 'typeorm';
import { Album } from '../../../data/entities/album.entity';
import { IAlbum } from '../../../main/interfaces/album.interface';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
import { AlbumDTO } from './dto/album.dto';
export declare class AlbumService {
    private albumRepository;
    private fileRepository;
    constructor(albumRepository: Repository<Album>, fileRepository: FileService);
    findAll(): Promise<IAlbum[]>;
    findByKey(key: string, value: string): Promise<IAlbum>;
    create(album: AlbumDTO, files: FileDTO[]): Promise<IAlbum>;
    update(id: string, album: AlbumDTO, files: FileDTO[]): Promise<IAlbum>;
    destroy(id: string): Promise<void>;
}
