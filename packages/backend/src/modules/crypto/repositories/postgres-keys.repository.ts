import { Injectable } from '@nestjs/common';
import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';
import { IKeysRepository } from './keys.repository';

@Injectable()
export class PostgresKeysRepository implements IKeysRepository {
  symmetricKeys: SymmetricKey[] = [
    {
      id: 1,
      key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      keyOwner: 'Ali Salami',
    },
  ];

  asymmetricKey: AsymmetricKey = {
    privateKey: '',
    publicKey: '',
  };

  public setAsymmetricKey(asymmetricKey: AsymmetricKey): any {
    if (
      this.asymmetricKey.privateKey === '' &&
      this.asymmetricKey.publicKey === ''
    ) {
      this.asymmetricKey = asymmetricKey;
      return true;
    } else {
      console.log('Asymmetric key already exists');
      return false;
    }
  }

  public setSymmetricKey(symmetricKey: SymmetricKey): any {
    this.symmetricKeys.push(symmetricKey);
    console.log('symmetricKey in set', this.symmetricKeys);
    return true;
  }

  public getAsymmetricKey(): any {
    if (
      this.asymmetricKey.privateKey !== '' &&
      this.asymmetricKey.publicKey !== ''
    ) {
      return this.asymmetricKey;
    } else {
      console.log('No Asymmetric key found');
      return false;
    }
  }

  public getSymmetricKey(keyOwner: string): any {
    const filteredKeys = this.symmetricKeys.filter(
      (symmetricKey) => symmetricKey.keyOwner === keyOwner,
    );

    if (filteredKeys.length > 0) {
      const symmetricKey = filteredKeys[0];
      return symmetricKey;
    } else {
      throw new Error('key not found');
    }
  }

  public updateSymmetricKey(newSymmetricKey: SymmetricKey): any {
    const filteredKeys = this.symmetricKeys.filter(
      (symmetricKey) => symmetricKey.keyOwner !== newSymmetricKey.keyOwner,
    );
    filteredKeys.push(newSymmetricKey);
    this.symmetricKeys = filteredKeys;
    console.log('symmetricKey in update', this.symmetricKeys);
  }
}
