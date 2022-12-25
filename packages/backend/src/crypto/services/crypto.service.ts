import { Injectable } from '@nestjs/common';
import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';
import { generateKey } from '../domain/helpers/keyGeneration';
import { IKeysRepository } from '../repositories/keys.repository';

@Injectable()
export class CryptoService {
  constructor(private readonly keyRepository: IKeysRepository) {}

  private symmetricKey: SymmetricKey = {
    id: 1,
    key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    keyOwner: 'ALI SALAMI',
  };
  private asymmetricKey: AsymmetricKey = {
    privateKey: '',
    publicKey: '',
  };
  setAsymmetricKey(newAsymmetricKey: AsymmetricKey) {
    this.asymmetricKey = newAsymmetricKey;
    console.log('newAsymmetricKey', newAsymmetricKey);
  }
  setSymmetricKey(newSymmetricKey: SymmetricKey) {
    this.symmetricKey = newSymmetricKey;
  }

  generateAsyncKey(){
    const asymmetricKey = generateKey();
    //this.cryptoService.setAsymmetricKey(asymmetricKey);
  }

  // decryptSymmetricKeyWithRsa(){
  //   rsaDecrypt();
  // }
}
