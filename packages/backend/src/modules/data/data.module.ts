import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SymmetricKey } from '../crypto/domain/entities/symmetricKey.entity';
import { IKeysRepository } from '../crypto/repositories/keys.repository';
import { PostgresKeysRepository } from '../crypto/repositories/postgres-keys.repository';
import { DataController } from './controllers/data.controller';
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
  imports: [TypeOrmModule.forFeature([SymmetricKey])],
})
export class DataModule {}
