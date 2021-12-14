import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column()
  year: number;

  @Column()
  genre: string;

  @Column({
    nullable: true,
  })
  numberOfSongs: number;

  @Column({
    nullable: true,
  })
  duration: string;
}
