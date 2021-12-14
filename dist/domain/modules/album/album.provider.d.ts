import { Connection } from 'typeorm';
import { Album } from '../../../data/entities/album.entity';
export declare const albumProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Album>;
    inject: string[];
}[];
