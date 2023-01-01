import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoController } from './controllers/crypto.controller';
import { AsymmetricKey } from './domain/entities/asymmetricKey.entity';
import { SymmetricKey } from './domain/entities/symmetricKey.entity';
import { IKeysRepository } from './repositories/keys.repository';
import { PostgresKeysRepository } from './repositories/postgres-keys.repository';
import { CryptoService } from './services/crypto.service';

@Module({
  controllers: [CryptoController],
  providers: [
    { provide: IKeysRepository, useClass: PostgresKeysRepository },
    CryptoService,
  ],
  imports: [TypeOrmModule.forFeature([AsymmetricKey, SymmetricKey])],
})
export class CryptoModule {}
