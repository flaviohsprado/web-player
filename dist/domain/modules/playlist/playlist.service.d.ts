import { Repository } from 'typeorm';
import { Playlist } from '../../../data/entities/playlist.entity';
import { PlaylistDTO } from './dto/playlist.dto';
import { IPlaylist } from '../../../main/interfaces/playlist.interface';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
import { MusicService } from '../music/music.service';
export declare class PlaylistService {
    private playlistRepository;
    private musicService;
    private fileRepository;
    constructor(playlistRepository: Repository<Playlist>, musicService: MusicService, fileRepository: FileService);
    findAll(): Promise<IPlaylist[]>;
    findByKey(key: string, value: string): Promise<IPlaylist>;
    create(playlist: PlaylistDTO, files: FileDTO[]): Promise<IPlaylist>;
    update(id: string, playlist: PlaylistDTO, files: FileDTO[]): Promise<IPlaylist>;
    destroy(id: string): Promise<void>;
}
