import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IAuthCredentials } from '../../../main/interfaces/auth.interface';
import { IUser } from '../../../main/interfaces/user.interface';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<Omit<IUser, 'password'>>;
    login(user: IAuthCredentials): Promise<{
        accessToken: string;
    }>;
}
