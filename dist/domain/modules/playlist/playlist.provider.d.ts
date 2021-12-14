import { Connection } from 'typeorm';
import { Playlist } from '../../../data/entities/playlist.entity';
export declare const playlistProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Playlist>;
    inject: string[];
}[];
