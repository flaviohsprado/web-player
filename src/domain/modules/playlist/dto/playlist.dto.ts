import { IFile } from '../../../../main/interfaces/file.interface';
import { uuid } from 'uuidv4';

export class PlaylistDTO {
  public id: string;
  public name: string;
  public description: string;
  public cover?: IFile;

  constructor(props: PlaylistDTO, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuid();
  }
}
