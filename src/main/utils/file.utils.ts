import { Injectable } from '@nestjs/common';
import { FileDTO } from '../../domain/modules/file/dto/file.dto';
import { S3Service } from '../../infra/s3/s3.service';
import { IFileUpload } from '../interfaces/fileUpload.interface';

@Injectable()
class FileUpload implements IFileUpload {
  private uploadService: S3Service;

  constructor() {
    this.uploadService = new S3Service();
  }

  async upload(
    files: FileDTO[],
    ownerId: string,
    ownerType: string,
  ): Promise<FileDTO[]> {
    const uploadedFiles = await this.uploadService.upload(
      files,
      ownerId,
      ownerType,
    );

    if (!uploadedFiles) {
      throw new Error('Not have file ou files for uploaded!');
    }

    return uploadedFiles as FileDTO[];
  }

  async delete(keys: string[]): Promise<void> {
    await this.uploadService.delete(keys);
  }
}

export default new FileUpload();
