import { Injectable } from '@nestjs/common';
import { IDataRepository } from '../repositories/data.repository';

@Injectable()
export class DataService {
  constructor(private readonly dataRepository: IDataRepository) {}
}
