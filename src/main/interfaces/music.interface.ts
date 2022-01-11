import { IAlbum } from './album.interface';
import { IFile } from './file.interface';

export interface IMusic {
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
}
