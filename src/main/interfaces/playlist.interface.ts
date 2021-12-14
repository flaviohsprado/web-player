import { IFile } from './file.interface';

export interface IPlaylist {
  id: string;
  name: string;
  description: string;
  cover?: IFile;
}
