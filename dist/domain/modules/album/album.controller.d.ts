import { AlbumDTO } from './dto/album.dto';
import { IAlbum } from '../../../main/interfaces/album.interface';
import { AlbumService } from './album.service';
import { FileDTO } from '../file/dto/file.dto';
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    findAll(): Promise<IAlbum[]>;
    findById(id: string): Promise<IAlbum>;
    create(file: FileDTO[], createAlbumDTO: AlbumDTO): Promise<IAlbum>;
    update(file: FileDTO[], id: string, updateAlbumDTO: AlbumDTO): Promise<IAlbum>;
    delete(id: string): Promise<void>;
}
