import { AsymmetricKey } from '../domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../domain/entities/symmetricKey.entity';

export abstract class IKeysRepository {
  public abstract setAsymmetricKey(asymmetricKey: AsymmetricKey): Promise<void>;
  public abstract setSymmetricKey(symmetricKey: SymmetricKey): Promise<void>;
  public abstract updateSymmetricKey(symmetricKey: SymmetricKey): Promise<void>;
  public abstract getAsymmetricKey(): Promise<AsymmetricKey | undefined>;
  public abstract getSymmetricKey(
    keyOwner: string,
  ): Promise<SymmetricKey | undefined>;
}
