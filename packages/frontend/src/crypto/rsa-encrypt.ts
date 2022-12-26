import NodeRSA from "encrypt-rsa";
import EncryptRsa from "encrypt-rsa";

export default function rsaEncrypt(publicKeys: any, plainText: any) {
  const nodeRSA = new NodeRSA();
  // const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();
  const encryptRsa = new EncryptRsa();
  // const cipherText = encryptRsa.encryptStringWithRsaPublicKey({
  //   text: "plainText",
  //   publicKey: publicKeys,
  // });

}
