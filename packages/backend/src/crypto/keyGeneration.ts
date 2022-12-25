import NodeRSA from 'encrypt-rsa';
import { AsymmetricKey } from './entities/ASymmetricKey.entity';

export const generateKey = () => {
  const nodeRSA = new NodeRSA();
  const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();
  const asymmetricKey: AsymmetricKey = {
    privateKey: privateKey,
    publicKey: publicKey,
  };
  return asymmetricKey;
};
