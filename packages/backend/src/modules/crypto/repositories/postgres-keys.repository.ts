import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';
import { IKeysRepository } from './keys.repository';

@Injectable()
export class PostgresKeysRepository implements IKeysRepository {
  constructor(
    @InjectRepository(SymmetricKey)
    private readonly symmetricKeyRepo: Repository<SymmetricKey>,
  ) {}
  symmetricKeys: SymmetricKey[] = [];

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
      return false;
    }
  }

  public setSymmetricKey(symmetricKey: SymmetricKey): any {
    const newSymmetricKey = this.symmetricKeyRepo.create(symmetricKey);
    return this.symmetricKeyRepo.save(newSymmetricKey);
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

  public async getSymmetricKey(
    keyOwner: string,
  ): Promise<SymmetricKey | undefined> {
    const key = this.symmetricKeyRepo.findOne({
      where: {
        keyOwner: keyOwner,
      },
    });

    if (!key) {
      throw new Error('key not found');
    }
    return key;
  }

  public updateSymmetricKey(newSymmetricKey: SymmetricKey): any {
    const filteredKeys = this.symmetricKeys.filter(
      (symmetricKey) => symmetricKey.keyOwner !== newSymmetricKey.keyOwner,
    );
    filteredKeys.push(newSymmetricKey);
    this.symmetricKeys = filteredKeys;
  }
}
