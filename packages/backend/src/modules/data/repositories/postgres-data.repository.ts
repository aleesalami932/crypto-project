import { Injectable } from '@nestjs/common';
import { DecryptedData } from '../domain/entities/decryptedData.entity';
import { EncryptedData } from '../domain/entities/encryptedData.entity';
import { IDataRepository } from './data.repository';

@Injectable()
export class PostgresDataRepository implements IDataRepository {
  encryptedData: EncryptedData[] = [];
  decryptedData: DecryptedData[] = [];

  public setEncryptedData(encryptedData: EncryptedData): any {
    this.encryptedData.push(encryptedData);
    console.log('encrypted data', this.encryptedData);
  }

  public setDecryptedData(decryptedData: DecryptedData): any {
    this.decryptedData.push(decryptedData);
    console.log('decrypted data', this.decryptedData);
  }
}
