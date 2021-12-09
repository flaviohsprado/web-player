import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../data/entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../../../main/interfaces/user.interface';
import FileUpload from '../../../main/utils/file.utils';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
import { IFile } from '../../../main/interfaces/file.interface';
import StandardError from '../../../main/utils/error.utils';
import { EmailUtils } from '../../../main/utils/email.utils';

@Injectable()
export class UserService {
  private emailUtils: EmailUtils;

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private fileRepository: FileService,
  ) {
    this.emailUtils = new EmailUtils(this.userRepository);
  }

  public async findAll(): Promise<IUser[]> {
    const users = await this.userRepository.find();

    for (const user of users) {
      let userAux = new UserDTO({ ...user }).hideSensitiveData();
      userAux.file = await this.fileRepository.findByKey('ownerId', user.id);

      Object.assign(user, userAux);
    }

    return users;
  }

  public async findByKey(
    key: string,
    value: string,
    encodeSensitiveData: boolean = true,
  ): Promise<IUser> {
    const user = await this.userRepository.findOne({
      where: { [key]: value },
    });

    let userAux;

    if (encodeSensitiveData) {
      userAux = new UserDTO({ ...user }).encodeSensitiveData();
    } else {
      userAux = new UserDTO({ ...user });
    }

    if (user)
      userAux.file = await this.fileRepository.findByKey('ownerId', user.id);

    Object.assign(user, userAux);

    return user;
  }

  public async create(user: UserDTO, files: FileDTO[]): Promise<IUser> {
    if (await this.emailUtils.checkEmailAlreadyExists(user.id, user.email))
      throw new StandardError(202, 'Email already exists');

    const filesPaths = await FileUpload.upload(files, user.id, 'user');

    await this.fileRepository.create(filesPaths);

    return await this.userRepository.save(user);
  }

  public async update(
    id: string,
    user: UserDTO,
    files: FileDTO[],
  ): Promise<IUser> {
    if (await this.emailUtils.checkEmailAlreadyExists(user.id, user.email))
      throw new Error('Email already exists');

    const userAvatar: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    if (files.length) {
      if (userAvatar) {
        await FileUpload.delete([userAvatar.key]);
        await this.fileRepository.destroy([userAvatar]);
      }

      const filesPaths = await FileUpload.upload(files, id, 'user');
      await this.fileRepository.create(filesPaths);
    }

    await this.userRepository.save({ ...user, id });

    return await this.userRepository.findOne(id);
  }

  public async destroy(id: string): Promise<void> {
    const userAvatar: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    await FileUpload.delete([userAvatar.key]);

    await this.fileRepository.destroy([userAvatar]);

    await this.userRepository.delete(id);
  }
}
