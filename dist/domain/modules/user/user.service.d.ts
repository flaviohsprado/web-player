import { Repository } from 'typeorm';
import { User } from '../../../data/entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../../../main/interfaces/user.interface';
import { FileDTO } from '../file/dto/file.dto';
import { FileService } from '../file/file.service';
export declare class UserService {
    private userRepository;
    private fileRepository;
    private emailUtils;
    constructor(userRepository: Repository<User>, fileRepository: FileService);
    findAll(): Promise<IUser[]>;
    findByKey(key: string, value: string, encodeSensitiveData?: boolean): Promise<IUser>;
    create(user: UserDTO, files: FileDTO[]): Promise<IUser>;
    update(id: string, user: UserDTO, files: FileDTO[]): Promise<IUser>;
    destroy(id: string): Promise<void>;
}
