import { IFile } from './file.interface';
import { IMusic } from './music.interface';

export interface IPlaylist {
  id: string;
  name: string;
  description: string;
  cover?: IFile;
  musics?: IMusic[];
}
