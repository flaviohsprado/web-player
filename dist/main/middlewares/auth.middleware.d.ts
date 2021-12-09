import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private jwtService;
    constructor();
    use(req: Request, res: Response, next: NextFunction): void;
}
