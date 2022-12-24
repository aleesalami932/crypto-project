import { Controller, Get } from '@nestjs/common';
import { generateKey } from './keyGeneration';

@Controller('crypto')
export class CryptoController {
  @Get('get-public-key')
  getPublicKey() {
    const publicKey = generateKey();
    return { data: publicKey };
  }
}
