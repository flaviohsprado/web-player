import { Connection, createConnection } from 'typeorm';
import { connectionOptions } from './ormconfig';

require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory(): Promise<Connection> {
      return createConnection(connectionOptions);
    },
  },
];
