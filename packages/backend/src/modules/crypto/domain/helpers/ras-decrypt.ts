import NodeRSA from 'encrypt-rsa';
export function rsaDecrypt(privateKey: string, encryptedText: string) {
  const nodeRSA = new NodeRSA();
  const decryptedText = nodeRSA.decryptStringWithRsaPrivateKey({
    text: encryptedText,
    privateKey,
  });
  console.log(decryptedText);
}
