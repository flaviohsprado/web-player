import { IAlbum } from '../../../../main/interfaces/album.interface';
import { IFile } from '../../../../main/interfaces/file.interface';
export declare class MusicDTO {
    id: string;
    title: string;
    artist: string;
    genre: string;
    year: number;
    rating: number;
    duration: string;
    playCount: number;
    favourite: boolean;
    favouriteCount: number;
    lastPlayed: Date;
    playlistId: string;
    albumId: string;
    file?: IFile;
    album?: IAlbum;
    constructor(props: MusicDTO, id?: string);
}
