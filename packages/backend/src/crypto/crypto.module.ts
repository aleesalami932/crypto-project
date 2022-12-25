import { Module } from '@nestjs/common';
import { CryptoController } from './controllers/crypto.controller';
import { IKeysRepository } from './repositories/keys.repository';
import { PostgresKeysRepository } from './repositories/postgres-keys.repository';
import { CryptoService } from './services/crypto.service';

@Module({
  controllers: [CryptoController],
  providers: [
    { provide: IKeysRepository, useClass: PostgresKeysRepository },
    CryptoService,
  ],
})
export class CryptoModule {}
