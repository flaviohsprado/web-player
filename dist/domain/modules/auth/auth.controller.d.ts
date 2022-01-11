import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(credentials: any): Promise<{
        accessToken: string;
        user: Omit<import("../../../main/interfaces/user.interface").IUser, "password">;
    }>;
}
