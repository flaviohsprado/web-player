import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Playlist {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
