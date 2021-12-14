import { IFile } from './file.interface';
export interface IAlbum {
    id: string;
    title: string;
    artist: string;
    year: number;
    genre: string;
    numberOfSongs: number;
    duration: string;
    cover?: IFile;
}
