import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { TypeOrmConfigService } from './configs/ormconfig';
import { getEnvPath } from './helpers/env.helper';
import { CryptoModule } from './modules/crypto/crypto.module';
import { DataModule } from './modules/data/data.module';
const envFilePath: string = getEnvPath('./envs');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      isGlobal: true,
      cache: false,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'local'),
        DATABASE_HOST: Joi.string().default('' + process.env.DATABASE_HOST),
        DATABASE_PORT: Joi.number().default(+process.env.DATABASE_PORT),
        DATABASE_USER: Joi.string().default('' + process.env.DATABASE_USER),
        DATABASE_PASSWORD: Joi.string().default(
          '' + process.env.DATABASE_PASSWORD,
        ),
        DATABASE_NAME: Joi.string().default('' + process.env.DATABASE_NAME),
      }),
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    CryptoModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
