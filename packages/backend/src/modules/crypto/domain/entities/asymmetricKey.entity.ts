import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AsymmetricKey {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  privateKey: string;
  @Column()
  publicKey: string;
}
