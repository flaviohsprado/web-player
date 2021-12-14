import { IFile } from '../../../../main/interfaces/file.interface';
export declare class MusicDTO {
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
    albumId: string;
    file?: IFile;
    constructor(props: MusicDTO, id?: string);
}
