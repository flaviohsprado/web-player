import { PlaylistDTO } from './dto/playlist.dto';
import { IPlaylist } from '../../../main/interfaces/playlist.interface';
import { PlaylistService } from './playlist.service';
import { FileDTO } from '../file/dto/file.dto';
export declare class PlaylistController {
    private readonly playlistService;
    constructor(playlistService: PlaylistService);
    findAll(): Promise<IPlaylist[]>;
    findById(id: string): Promise<IPlaylist>;
    create(file: FileDTO[], createPlaylistDTO: PlaylistDTO): Promise<IPlaylist>;
    update(file: FileDTO[], id: string, playlist: PlaylistDTO): Promise<IPlaylist>;
    delete(id: string): Promise<void>;
}
