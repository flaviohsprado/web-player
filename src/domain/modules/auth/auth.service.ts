import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import CryptographyService from '../../../infra/criptography.service';
import {
  IAuth,
  IAuthCredentials,
} from '../../../main/interfaces/auth.interface';
import { IUser } from '../../../main/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<IUser, 'password'>> {
    const user = await this.userService.findByKey('email', email, false);

    const decriptedPassword: string = await CryptographyService.decrypt(
      password,
    );

    if (user && user.password === decriptedPassword) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: IAuthCredentials) {
    const userValidated: Omit<IUser, 'password'> = await this.validateUser(
      user.email,
      user.password,
    );

    const payload: IAuth = {
      id: userValidated.id,
      username: userValidated.username,
      email: userValidated.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
