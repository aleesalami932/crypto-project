import { Body, Controller, Get, Post } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { generateKey } from './keyGeneration';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('get-public-key')
  getPublicKey() {
    const asymmetricKey = generateKey();
    this.cryptoService.setAsymmetricKey(asymmetricKey);
    return { data: asymmetricKey.publicKey };
  }

  @Post('share-symmetric-key')
  shareSymmetricKey(@Body() body) {
    const plainText = body.symmetricKey;
    const symmetricKey = plainText.split(',');
    console.log('symmetricKey', symmetricKey);
    return symmetricKey;
  }
}
