import { Connection } from 'typeorm';
import { Music } from '../../../data/entities/music.entity';
export declare const musicProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Music>;
    inject: string[];
}[];
