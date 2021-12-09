import { IFile } from '../../file/interfaces/file.interface';
export interface IMusic {
    id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    year: number;
    rating: number;
    duration: string;
    cover: string;
    playCount: number;
    favourite: boolean;
    favouriteCount: number;
    lastPlayed: Date;
    playlistId: string;
    file?: IFile;
}
