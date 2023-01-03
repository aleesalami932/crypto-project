import aes from "aes-js";

export default function aesEncrypt(plainText: string, symmetricKey: number[]) {
  const textBytes = aes.utils.utf8.toBytes(plainText);
  const aesCtr = new aes.ModeOfOperation.ctr(symmetricKey);
  const encryptedBytes = aesCtr.encrypt(textBytes);
  const encryptedHex: string = aes.utils.hex.fromBytes(encryptedBytes);
  console.log("-------------AES Encryption Ops-------------");
  console.log("Plain Text: ", plainText);
  console.log("Symmetric Key: ", symmetricKey);
  console.log("Plain Text In Bytes: ", textBytes);
  console.log("Cipher Text In Bytes: ", encryptedBytes);
  console.log("Cipher Text In Hex: ", encryptedHex);
  console.log("-------------AES Encryption Ops-------------");
  return encryptedHex;
}
