import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Music {
  @PrimaryColumn()
  public id: string;

  @Column()
  public title: string;

  @Column()
  public artist: string;

  @Column()
  public album: string;

  @Column()
  public genre: string;

  @Column()
  public year: number;

  @Column({
    nullable: true,
  })
  public rating: number;

  @Column()
  public duration: string;

  @Column({
    nullable: true,
  })
  public cover: string;

  @Column({
    nullable: true,
  })
  public playCount: number;

  @Column({
    nullable: true,
  })
  public favourite: boolean;

  @Column({
    nullable: true,
  })
  public favouriteCount: number;

  @Column({
    nullable: true,
  })
  public lastPlayed: Date;

  @Column({
    nullable: true,
  })
  public playlistId: string;
}
