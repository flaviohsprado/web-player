import { Connection } from 'typeorm';
import { Music } from '../../../data/entities/music.entity';

export const musicProviders = [
  {
    provide: 'MUSIC_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Music),
    inject: ['DATABASE_CONNECTION'],
  },
];
