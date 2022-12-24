import aes from "aes-js";
export default function aesDecrypt(encryptedHex: string, key: number[]) {
  console.log("decryption");
  console.log("encrypted hex", encryptedHex);

  const encryptedBytes = aes.utils.hex.toBytes(encryptedHex);
  console.log("encrypted bytes", encryptedBytes);

  const aesCtr = new aes.ModeOfOperation.ctr(key);
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  console.log("decrypted bytes", decryptedBytes);

  const decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);
  console.log("decrypted text", decryptedText);

  console.log(
    "================================================================="
  );

  return decryptedText;
}
