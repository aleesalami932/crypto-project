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
    @InjectRepository(AsymmetricKey)
    private readonly asymmetricKeyRepo: Repository<AsymmetricKey>,
  ) {}
  symmetricKeys: SymmetricKey[] = [];

  public async setAsymmetricKey(
    asymmetricKey: AsymmetricKey,
  ): Promise<AsymmetricKey> {
    const oldKey = await this.asymmetricKeyRepo.findOne({ where: { id: 1 } });
    if (oldKey) {
      return oldKey;
    } else {
      const newAsymmetricKey = this.asymmetricKeyRepo.create(asymmetricKey);
      return await this.asymmetricKeyRepo.save(newAsymmetricKey);
    }
  }

  public setSymmetricKey(symmetricKey: SymmetricKey): any {
    const newSymmetricKey = this.symmetricKeyRepo.create(symmetricKey);
    return this.symmetricKeyRepo.save(newSymmetricKey);
  }

  public getAsymmetricKey(
    publicKey: string,
  ): Promise<AsymmetricKey | undefined> {
    const key = this.asymmetricKeyRepo.findOne({
      where: {
        publicKey: publicKey,
      },
    });

    if (!key) {
      throw new Error('key not found');
    }
    return key;
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
