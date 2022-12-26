import { DecryptedData } from '../domain/entities/decryptedData.entity';
import { EncryptedData } from '../domain/entities/encryptedData.entity';

export abstract class IDataRepository {
  public abstract setEncryptedData(encryptedData: EncryptedData): Promise<void>;
  public abstract setDecryptedData(decryptedData: DecryptedData): Promise<void>;
}
