import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DecryptedData } from '../domain/entities/decryptedData.entity';
import { EncryptedData } from '../domain/entities/encryptedData.entity';
import { IDataRepository } from './data.repository';

@Injectable()
export class PostgresDataRepository implements IDataRepository {
  constructor(
    @InjectRepository(EncryptedData)
    private readonly encryptedDataRepo: Repository<EncryptedData>,
    @InjectRepository(DecryptedData)
    private readonly decryptedDataRepo: Repository<DecryptedData>,
  ) {}

  public setEncryptedData(encryptedData: EncryptedData): any {
    const newEncryptedData = this.encryptedDataRepo.create(encryptedData);
    return this.encryptedDataRepo.save(newEncryptedData);
  }

  public setDecryptedData(decryptedData: DecryptedData): any {
    const newDecryptedData = this.decryptedDataRepo.create(decryptedData);
    return this.decryptedDataRepo.save(newDecryptedData);
  }
}
