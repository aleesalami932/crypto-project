import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AsymmetricKey {
  @PrimaryGeneratedColumn()
  privateKey: string;
  @Column()
  publicKey: string;
}
