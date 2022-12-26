import { Injectable } from '@nestjs/common';
import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';
import { generateKey } from '../domain/helpers/keyGeneration';
import { IKeysRepository } from '../repositories/keys.repository';

@Injectable()
export class CryptoService {
  constructor(private readonly keyRepository: IKeysRepository) {}

  setAsymmetricKey(newAsymmetricKey: AsymmetricKey) {
    this.keyRepository.setAsymmetricKey(newAsymmetricKey);
  }

  setSymmetricKey(newSymmetricKey: SymmetricKey) {
    this.keyRepository.setSymmetricKey(newSymmetricKey);
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
