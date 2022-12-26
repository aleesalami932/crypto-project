import { Module } from '@nestjs/common';
import { DataController } from './controllers/data.controller';
import { IDataRepository } from './repositories/data.repository';
import { PostgresDataRepository } from './repositories/postgres-data.repository';
import { DataService } from './services/data.service';

@Module({
  controllers: [DataController],
  providers: [
    { provide: IDataRepository, useClass: PostgresDataRepository },
    DataService,
  ],
})
export class DataModule {}
