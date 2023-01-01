import { Injectable } from '@nestjs/common';
import { IKeysRepository } from 'src/modules/crypto/repositories/keys.repository';
import { DecryptedData } from '../domain/entities/decryptedData.entity';
import { EncryptedData } from '../domain/entities/encryptedData.entity';
import aesDecrypt from '../domain/helpers/aes-decrypt';
import { IDataRepository } from '../repositories/data.repository';

@Injectable()
export class DataService {
  constructor(
    private readonly dataRepository: IDataRepository,
    private readonly keyRepository: IKeysRepository,
  ) {}
  async setEncryptedData(encryptedData: EncryptedData) {
    this.dataRepository.setEncryptedData(encryptedData);
    const key = await this.keyRepository.getSymmetricKey('mhmd lamaa');
    const keyArray = key.key.split(',');
    const symmetricKey: number[] = [];
    for (let i = 0; i < keyArray.length; i++) {
      console.log(`key[${i}]:`, keyArray[i]);

      const temp = parseInt(keyArray[i]);
      console.log(`tepm[${i}]:`, temp);
      symmetricKey[i] = temp;
    }
    console.log('key', key);
    console.log('keyArray', keyArray);
    console.log('symmetricKey', symmetricKey);

    const plainText = aesDecrypt(encryptedData.cipherText, symmetricKey);
    const decryptedData: DecryptedData = {
      dataOwner: encryptedData.dataOwner,
      id: encryptedData.id,
      plainText: plainText,
    };
    this.dataRepository.setDecryptedData(decryptedData);
  }
}
