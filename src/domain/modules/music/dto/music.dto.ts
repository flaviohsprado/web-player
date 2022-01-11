import { IAlbum } from '../../../../main/interfaces/album.interface';
import { uuid } from 'uuidv4';
import { IFile } from '../../../../main/interfaces/file.interface';

export class MusicDTO {
  public id: string;
  public title: string;
  public artist: string;
  public genre: string;
  public year: number;
  public rating: number;
  public duration: string;
  public playCount: number;
  public favourite: boolean;
  public favouriteCount: number;
  public lastPlayed: Date;
  public playlistId: string;
  public albumId: string;
  public file?: IFile;
  public album?: IAlbum;

  constructor(props: MusicDTO, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuid();
  }
}
