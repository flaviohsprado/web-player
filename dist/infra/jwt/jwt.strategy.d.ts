import { IAuth } from '../../main/interfaces/auth.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: IAuth): Promise<{
        id: string;
        username: string;
        email: string;
    }>;
}
export {};
