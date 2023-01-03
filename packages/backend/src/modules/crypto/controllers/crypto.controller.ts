import { Body, Controller, Get, Post } from '@nestjs/common';
import { CryptoService } from '../services/crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('get-public-key')
  async getPublicKey() {
    const publicKey = await this.cryptoService.generateAsyncKey();
    return { data: publicKey };
  }

  @Post('share-symmetric-key')
  shareSymmetricKey(@Body() body) {
    const symmetricKeyDetails = body;
    this.cryptoService.setSymmetricKey(symmetricKeyDetails);
    return { success: true };
  }
}
