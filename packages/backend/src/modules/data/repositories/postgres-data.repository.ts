import { Injectable } from '@nestjs/common';
import { IDataRepository } from './data.repository';

@Injectable()
export class PostgresDataRepository implements IDataRepository {}
