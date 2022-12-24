import EncryptRsa from "encrypt-rsa";

export default function rsaEncrypt(publicKey: any, plainText: any) {
  const encryptRsa = new EncryptRsa();
  const cipherText = encryptRsa.encryptStringWithRsaPublicKey({
    text: plainText,
    publicKey,
  });

  console.log("cipherText", cipherText);
}
