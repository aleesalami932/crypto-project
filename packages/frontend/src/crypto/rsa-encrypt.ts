import forge from "node-forge";

export default function rsaEncrypt(publicKey: string, plainText: any) {
  const encryption = forge.pki.publicKeyFromPem(publicKey);
  const cipherText = encryption.encrypt(plainText, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf1.create(),
  });

  return cipherText;
}
