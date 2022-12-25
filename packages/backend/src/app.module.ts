import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoController } from './crypto/crypto.controller';
import { CryptoService } from './crypto/crypto.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'crypto123',
    //   database: 'crypto-db',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController, CryptoController],
  providers: [AppService, CryptoService],
})
export class AppModule {}
