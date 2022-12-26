import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { DataService } from '../services/data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}
}
