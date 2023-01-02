import forge from "node-forge";

export default function rsaEncrypt(publicKey: string, plainText: any) {
  const encryption = forge.pki.publicKeyFromPem(
    `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxfOVg6d9c5AYIg6z8WM7
      8GwiA5tucIdd8kxjUiU4bjvHJSKpHSMpxnYGvvAD1BXvaT7O9QxpFpustDy4BkPQ
      whyaY01btwaP9FDavUdmmqvOnEOgro8U9IvMuet94xeLj6XUflCc8lkgwV4RrTfW
      451OxJCXCLcmkFRPaf+lREgpqvFvayTaAYjwErnA5hvbJrIoFw+O+FTtDeasAzIQ
      WSZFG8R9uLUoAZ/CEA4OBDVFDXA34hmVCalR5HzuQF41x/NgCRu0FVNKvxOt6Zi3
      amUUZhVkwV2zmF4Yx6P9nbjMt1R16lLDJd7x3U0LPeysSfzHRmGA/9Z/VTqTgEjx
      XQIDAQAB
      -----END PUBLIC KEY-----`
  );
  const cipherText = encryption.encrypt(plainText, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf1.create(),
  });

  return cipherText;
}
