import * as aes from 'aes-js';
export default function aesDecrypt(
  encryptedHex: string,
  symmetricKey: number[],
) {
  const encryptedBytes = aes.utils.hex.toBytes(encryptedHex);
  const aesCtr = new aes.ModeOfOperation.ctr(symmetricKey);
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  const decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);
  console.log('-------------AES Decryption Ops-------------');
  console.log('Cipher Text In Hex: ', encryptedHex);
  console.log('Symmetric Key: ', symmetricKey);
  console.log('Cipher Text In Bytes: ', encryptedBytes);
  console.log('Plain Text In Bytes: ', decryptedBytes);
  console.log('Plain Text: ', decryptedText);
  console.log('-------------AES Decryption Ops-------------');
  return decryptedText;
}
