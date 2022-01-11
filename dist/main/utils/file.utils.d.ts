import { FileDTO } from '../../domain/modules/file/dto/file.dto';
import { IFileUpload } from '../interfaces/fileUpload.interface';
declare class FileUpload implements IFileUpload {
    private uploadService;
    constructor();
    upload(files: FileDTO[], ownerId: string, ownerType: string): Promise<FileDTO[]>;
    delete(keys: string[]): Promise<void>;
}
declare const _default: FileUpload;
export default _default;
