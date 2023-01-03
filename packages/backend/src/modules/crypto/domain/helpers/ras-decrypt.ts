import * as forge from 'node-forge';
export function rsaDecrypt(privateKey: string, encryptedText: string) {
  const decryption = forge.pki.privateKeyFromPem(privateKey);
  const plainText = decryption.decrypt(encryptedText, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf1.create(),
  });
  return plainText;
}
