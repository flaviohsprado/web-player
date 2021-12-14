import { IFile } from '../../../../main/interfaces/file.interface';
import { uuid } from 'uuidv4';

export class AlbumDTO {
  public id: string;
  public title: string;
  public artist: string;
  public year: number;
  public genre: string;
  public numberOfSongs: number;
  public duration: string;
  public cover?: IFile;

  constructor(props: AlbumDTO, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuid();
  }
}
