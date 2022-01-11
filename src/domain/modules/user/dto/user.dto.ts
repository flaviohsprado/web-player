import { uuid } from 'uuidv4';
import CryptographyService from '../../../../infra/criptography.service';
import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';
import { File } from '../../../../data/entities/file.entity';
import { Logger } from '@nestjs/common';

export class UserDTO {
  id: string;
  username: string;

  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;

  firstName?: string;

  lastName?: string;

  dateOfBirth?: string;

  @IsMobilePhone('pt-BR')
  phoneNumber?: string;

  address?: string;

  city?: string;

  country?: string;

  token?: string;

  createdAt: Date;

  updatedAt: Date;

  file: File;

  constructor(
    props: Omit<
      UserDTO,
      'encryptPassword' | 'hideSensitiveData' | 'encodeSensitiveData'
    >,
    id?: string,
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }

  public async encryptPassword(): Promise<UserDTO> {
    this.password = await CryptographyService.encrypt(this.password);

    return this;
  }

  public hideSensitiveData(): UserDTO {
    this.password = null;
    this.token = null;
    this.createdAt = null;
    this.updatedAt = null;
    this.dateOfBirth = null;
    this.phoneNumber = null;

    return this;
  }

  public encodeSensitiveData(): UserDTO {
    this.id = '##########';
    this.password = '******';
    this.token = null;
    this.createdAt = null;
    this.updatedAt = null;
    this.dateOfBirth = null;
    this.phoneNumber =
      this.phoneNumber.substring(0, 3) +
      '******' +
      this.phoneNumber.substring(9);

    return this;
  }
}
