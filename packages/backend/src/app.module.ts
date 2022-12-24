import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoController } from './crypto/crypto.controller';

@Module({
  imports: [],
  controllers: [AppController, CryptoController],
  providers: [AppService],
})
export class AppModule {}
