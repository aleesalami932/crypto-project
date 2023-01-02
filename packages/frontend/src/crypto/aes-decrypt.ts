import aes from "aes-js";
export default function aesDecrypt(encryptedHex: string, key: number[]) {
  const encryptedBytes = aes.utils.hex.toBytes(encryptedHex);
  const aesCtr = new aes.ModeOfOperation.ctr(key);
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  const decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}
