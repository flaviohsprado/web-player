import { User } from '../../data/entities/user.entity';
import { Repository } from 'typeorm';
export declare class EmailUtils {
    private userRepository;
    constructor(userRepository: Repository<User>);
    checkEmailAlreadyExists(userId: string, email: string): Promise<boolean>;
}
