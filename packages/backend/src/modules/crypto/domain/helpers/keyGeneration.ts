import { AsymmetricKey } from '../entities/asymmetricKey.entity';
import * as forge from 'node-forge';

export const generateKey = () => {
  const rsa = forge.pki.rsa;
  const keypair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
  const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);
  const publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
  const asymmetricKey: AsymmetricKey = {
    privateKey: privateKey,
    publicKey: publicKey,
  };

  return asymmetricKey;
};
