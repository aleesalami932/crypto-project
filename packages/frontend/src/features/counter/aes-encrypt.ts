import aes from "aes-js";

export default function aesEncrypt(plainText: string, key: number[]) {
  console.log("encryption");
  console.log("plain text", plainText);
  const textBytes = aes.utils.utf8.toBytes(plainText);
  console.log("text in bytes", textBytes);

  const aesCtr = new aes.ModeOfOperation.ctr(key);
  const encryptedBytes = aesCtr.encrypt(textBytes);
  console.log("encrypted bytes", encryptedBytes);

  const encryptedHex = aes.utils.hex.fromBytes(encryptedBytes);
  console.log("cypher text in hex", encryptedHex);

  console.log(
    "================================================================="
  );

  return encryptedHex;
}
