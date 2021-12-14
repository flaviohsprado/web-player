import { IFile } from '../../../../main/interfaces/file.interface';
export declare class AlbumDTO {
    id: string;
    title: string;
    artist: string;
    year: number;
    genre: string;
    numberOfSongs: number;
    duration: string;
    cover?: IFile;
    constructor(props: AlbumDTO, id?: string);
}
