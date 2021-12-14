import { Connection } from 'typeorm';
import { Album } from '../../../data/entities/album.entity';

export const albumProviders = [
  {
    provide: 'ALBUM_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Album),
    inject: ['DATABASE_CONNECTION'],
  },
];
