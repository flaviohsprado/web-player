import { Connection } from 'typeorm';
import { Playlist } from '../../../data/entities/playlist.entity';

export const playlistProviders = [
  {
    provide: 'PLAYLIST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Playlist),
    inject: ['DATABASE_CONNECTION'],
  },
];
