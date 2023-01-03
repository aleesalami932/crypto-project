import { AsymmetricKey } from '../entities/asymmetricKey.entity';
import * as forge from 'node-forge';

export const generateKey = () => {
  const rsa = forge.pki.rsa;
  const keyPair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
  const privateKey = forge.pki.privateKeyToPem(keyPair.privateKey);
  const publicKey = forge.pki.publicKeyToPem(keyPair.publicKey);
  const asymmetricKey: AsymmetricKey = {
    privateKey: privateKey,
    publicKey: publicKey,
    id: 1,
  };

  return asymmetricKey;
};
