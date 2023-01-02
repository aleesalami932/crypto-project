import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EncryptedData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cipherText: string;
  @Column()
  dataOwner: string;
}
