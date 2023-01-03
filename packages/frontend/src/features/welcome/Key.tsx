import React, { useState, useEffect } from "react";
import { generateSymmetricKey } from "../../crypto/generate-symmetric-key";
import rsaEncrypt from "../../crypto/rsa-encrypt";
import { Encryption } from "../encryption/Encryption";
import { useGetPublicKeyQuery } from "./keySlice";
import Login from "./Login";

export function Key() {
  const [encryptedSymmetricKey, setEncryptedSymmetricKey] = useState("");
  const [symmetricKey, setSymmetricKey] = useState<number[]>([]);
  const { data } = useGetPublicKeyQuery("");

  useEffect(() => {
    if (data) {
      const publicKey = data.data.toString();
      const stringSymmetricKey = symmetricKey.toString();
      const cipherKey = rsaEncrypt(publicKey, stringSymmetricKey);
      setEncryptedSymmetricKey(cipherKey);
      
      console.log("-------------Symmetric Key Ops-------------");
      console.log("Public Key: ", publicKey);
      console.log("Symmetric Key: ", symmetricKey);
      console.log("String Symmetric Key: ", stringSymmetricKey);
      console.log("encrypted Symmetric Key: ", cipherKey);
      console.log("-------------Symmetric Key Ops-------------");
    }
    if (symmetricKey.length === 0) {
      const temp = generateSymmetricKey();
      setSymmetricKey(temp);
    }
  }, [data, symmetricKey]);

  return (
    <div>
      <div>{Login({ symmetricKey: encryptedSymmetricKey })}</div>
      <div>{Encryption({ symmetricKey })} </div>
    </div>
  );
}
