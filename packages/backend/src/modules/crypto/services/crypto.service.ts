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
    // const asymmetricKey = await this.keyRepository.getAsymmetricKey();
    // const plainText = rsaDecrypt(asymmetricKey.privateKey, newSymmetricKey.key);
    this.keyRepository.setSymmetricKey({
      ...newSymmetricKey,
      key: newSymmetricKey.key,
    });
  }

  async updateSymmetricKey(newSymmetricKey: SymmetricKey) {
    const oldSymmetricKey = await this.keyRepository.getSymmetricKey(
      newSymmetricKey.keyOwner,
    );
    const updateSymmetricKey: SymmetricKey = {
      ...oldSymmetricKey,
      key: newSymmetricKey.key,
    };
    this.keyRepository.updateSymmetricKey(updateSymmetricKey);
  }

  generateAsyncKey() {
    const asymmetricKey = generateKey();
    this.keyRepository.setAsymmetricKey(asymmetricKey);
    return asymmetricKey.publicKey;
  }
}
