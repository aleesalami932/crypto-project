import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DecryptedData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  plainText: string;
  @Column()
  dataOwner: string;
}
