import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoModule } from './crypto/crypto.module';

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
    CryptoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
