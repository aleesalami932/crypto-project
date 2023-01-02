import aes from "aes-js";

export default function aesEncrypt(plainText: string, key: number[]) {
  const textBytes = aes.utils.utf8.toBytes(plainText);
  const aesCtr = new aes.ModeOfOperation.ctr(key);
  const encryptedBytes = aesCtr.encrypt(textBytes);
  const encryptedHex: string = aes.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
}
