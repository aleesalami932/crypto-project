import { Injectable } from '@nestjs/common';
import { AsymmetricKey } from './entities/ASymmetricKey.entity';
import { SymmetricKey } from './entities/symmetricKey.entity';

@Injectable()
export class CryptoService {
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

  // decryptSymmetricKeyWithRsa(){
  //   rsaDecrypt();
  // }
}
