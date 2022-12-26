import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CryptoService } from '../services/crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('get-public-key')
  getPublicKey() {
    const publicKey = this.cryptoService.generateAsyncKey();
    return { data: publicKey };
  }

  @Post('share-symmetric-key')
  shareSymmetricKey(@Body() body) {
    const symmetricKeyDetails = body;
    this.cryptoService.setSymmetricKey(symmetricKeyDetails);
    return { success: true };
  }

  @Patch('share-symmetric-key')
  updateSymmetricKey(@Body() body) {
    const symmetricKeyDetails = body;
    this.cryptoService.updateSymmetricKey(symmetricKeyDetails);
    return { success: true };
  }
}
