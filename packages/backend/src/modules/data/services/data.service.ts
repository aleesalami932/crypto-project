import { Injectable } from '@nestjs/common';
import { DecryptedData } from '../domain/entities/decryptedData.entity';
import { EncryptedData } from '../domain/entities/encryptedData.entity';
import aesDecrypt from '../domain/helpers/aes-decrypt';
import { IDataRepository } from '../repositories/data.repository';

@Injectable()
export class DataService {
  constructor(private readonly dataRepository: IDataRepository) {}
  setEncryptedData(encryptedData: EncryptedData) {
    this.dataRepository.setEncryptedData(encryptedData);
    const symmetricKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const plainText = aesDecrypt(encryptedData.cipherText, symmetricKey);
    const decryptedData: DecryptedData = {
      dataOwner: encryptedData.dataOwner,
      id: encryptedData.id,
      plainText: plainText,
    };
    this.dataRepository.setDecryptedData(decryptedData);
  }
}
