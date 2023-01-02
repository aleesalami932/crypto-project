import { Injectable } from '@nestjs/common';
import { IKeysRepository } from 'src/modules/crypto/repositories/keys.repository';
import { DecryptedData } from '../domain/entities/decryptedData.entity';
import { EncryptedData } from '../domain/entities/encryptedData.entity';
import aesDecrypt from '../domain/helpers/aes-decrypt';
import { IDataRepository } from '../repositories/data.repository';
import transformKey from '../domain/helpers/transformKey';

@Injectable()
export class DataService {
  constructor(
    private readonly dataRepository: IDataRepository,
    private readonly keyRepository: IKeysRepository,
  ) {}
  async setEncryptedData(encryptedData: EncryptedData) {
    this.dataRepository.setEncryptedData(encryptedData);
    const key = await this.keyRepository.getSymmetricKey(
      encryptedData.dataOwner,
    );
    const keyString = key.key;
    const symmetricKey = transformKey(keyString);

    const plainText = aesDecrypt(encryptedData.cipherText, symmetricKey);
    const decryptedData: DecryptedData = {
      dataOwner: encryptedData.dataOwner,
      plainText: plainText,
      id: encryptedData.id,
    };
    this.dataRepository.setDecryptedData(decryptedData);
  }
}
