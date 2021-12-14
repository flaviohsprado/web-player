import { IFile } from '../../../../main/interfaces/file.interface';
export declare class PlaylistDTO {
    id: string;
    name: string;
    description: string;
    cover?: IFile;
    constructor(props: PlaylistDTO, id?: string);
}
