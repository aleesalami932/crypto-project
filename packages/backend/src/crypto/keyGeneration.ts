import NodeRSA from 'encrypt-rsa';

export const generateKey = () => {
  const nodeRSA = new NodeRSA();
  const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();
  return publicKey;
};
