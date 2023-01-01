import React, { useState, useEffect } from "react";
import { generateSymmetricKey } from "../../crypto/generate-symmetric-key";
import rsaEncrypt from "../../crypto/rsa-encrypt";
import { Encryption } from "../encryption/Encryption";
import { useGetPublicKeyQuery, useShareSymmetricKeyMutation } from "./keySlice";

export function Key() {
  const [encryptedSymmetricKey, setEncryptedSymmetricKey] = useState("");
  const [symmetricKey, setSymmetricKey] = useState<number[]>([]);
  const { data } = useGetPublicKeyQuery("");
  const [shareSymmetricKey, { isLoading }] = useShareSymmetricKeyMutation();

  useEffect(() => {
    if (data) {
      const key = data.data;
      const cipherKey = rsaEncrypt(key, symmetricKey);
      setEncryptedSymmetricKey(symmetricKey.toString());
    }
    if (symmetricKey.length === 0) {
      const temp = generateSymmetricKey();
      setSymmetricKey(temp);
    }
  }, [data]);

  return (
    <div>
      <button
        onClick={() => {
          shareSymmetricKey(encryptedSymmetricKey);
        }}
      >
        Share Symmetric Key
      </button>
      <div>{Encryption({ symmetricKey })} </div>
    </div>
  );
}
