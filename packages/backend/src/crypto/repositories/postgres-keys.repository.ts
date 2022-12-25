import { Injectable } from '@nestjs/common';
import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';
import { IKeysRepository } from './keys.repository';

@Injectable()
export class PostgresKeysRepository implements IKeysRepository {
  public setAsymmetricKey(asymmetricKey: AsymmetricKey): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public setSymmetricKey(symmetricKey: SymmetricKey): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public getAsymmetricKey(): Promise<AsymmetricKey> {
    throw new Error('Method not implemented.');
  }
  public getSymmetricKey(keyOwner: string): Promise<SymmetricKey> {
    throw new Error('Method not implemented.');
  }
}
