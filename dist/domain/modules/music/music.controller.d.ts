import { MusicDTO } from './dto/music.dto';
import { IMusic } from '../../../main/interfaces/music.interface';
import { MusicService } from './music.service';
import { FileDTO } from '../file/dto/file.dto';
export declare class MusicController {
    private readonly musicService;
    constructor(musicService: MusicService);
    findAll(): Promise<IMusic[]>;
    findById(id: string): Promise<IMusic>;
    create(file: FileDTO[], createMusicDTO: MusicDTO): Promise<IMusic>;
    update(file: FileDTO[], id: string, music: MusicDTO): Promise<IMusic>;
    delete(id: string): Promise<void>;
}
