import { Repository } from 'typeorm';
import { Music } from '../../../data/entities/music.entity';
import { MusicDTO } from './dto/music.dto';
import { IMusic } from '../../../main/interfaces/music.interface';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
export declare class MusicService {
    private musicRepository;
    private fileRepository;
    constructor(musicRepository: Repository<Music>, fileRepository: FileService);
    findAll(): Promise<IMusic[]>;
    findByKey(key: string, value: string): Promise<IMusic>;
    create(music: MusicDTO, files: FileDTO[]): Promise<IMusic>;
    update(id: string, music: MusicDTO, files: FileDTO[]): Promise<IMusic>;
    destroy(id: string): Promise<void>;
}
