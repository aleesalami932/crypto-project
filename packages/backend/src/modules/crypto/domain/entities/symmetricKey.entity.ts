import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SymmetricKey {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  keyOwner: string;
  @Column()
  key: string;
}
