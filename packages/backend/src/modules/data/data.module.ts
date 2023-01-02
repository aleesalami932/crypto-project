import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsymmetricKey } from '../crypto/domain/entities/asymmetricKey.entity';
import { SymmetricKey } from '../crypto/domain/entities/symmetricKey.entity';
import { IKeysRepository } from '../crypto/repositories/keys.repository';
import { PostgresKeysRepository } from '../crypto/repositories/postgres-keys.repository';
import { DataController } from './controllers/data.controller';
import { DecryptedData } from './domain/entities/decryptedData.entity';
import { EncryptedData } from './domain/entities/encryptedData.entity';
import { IDataRepository } from './repositories/data.repository';
import { PostgresDataRepository } from './repositories/postgres-data.repository';
import { DataService } from './services/data.service';

@Module({
  controllers: [DataController],
  providers: [
    { provide: IDataRepository, useClass: PostgresDataRepository },
    { provide: IKeysRepository, useClass: PostgresKeysRepository },
    DataService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      AsymmetricKey,
      SymmetricKey,
      EncryptedData,
      DecryptedData,
    ]),
  ],
})
export class DataModule {}
