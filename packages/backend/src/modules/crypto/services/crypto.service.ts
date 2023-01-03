import { Injectable } from '@nestjs/common';
import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';
import { generateKey } from '../domain/helpers/keyGeneration';
import { rsaDecrypt } from '../domain/helpers/ras-decrypt';
import { IKeysRepository } from '../repositories/keys.repository';

@Injectable()
export class CryptoService {
  constructor(private readonly keyRepository: IKeysRepository) {}

  setAsymmetricKey(newAsymmetricKey: AsymmetricKey) {
    this.keyRepository.setAsymmetricKey(newAsymmetricKey);
  }

  async setSymmetricKey(newSymmetricKey: SymmetricKey) {
    const asymmetricKey = await this.keyRepository.getAsymmetricKey(1);
    const privateKey = asymmetricKey.privateKey.toString();
    const encryptedSymmetricKey = newSymmetricKey.key;
    const plainText = rsaDecrypt(privateKey, encryptedSymmetricKey);
    this.keyRepository.setSymmetricKey({
      ...newSymmetricKey,
      key: plainText,
    });
    console.log('-------------Symmetric Key Ops-------------');
    console.log('encrypted Symmetric Key: ', encryptedSymmetricKey);
    console.log('Symmetric Key: ', plainText);
    console.log('-------------Symmetric Key Ops-------------');
  }

  async generateAsyncKey() {
    const asymmetricKey = generateKey();
    const key = await this.keyRepository.setAsymmetricKey(asymmetricKey);
    return key.publicKey;
  }
}
