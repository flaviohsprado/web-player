import { FileDTO } from 'src/domain/modules/file/dto/file.dto';

export interface IFileUpload {
  upload(
    files: FileDTO[],
    ownerId: string,
    ownerType: string,
  ): Promise<FileDTO[]>;
  delete(keys: string[]): Promise<void>;
}
