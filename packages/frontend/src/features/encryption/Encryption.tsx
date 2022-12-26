import React, { useState } from "react";
import aesDecrypt from "../../crypto/aes-decrypt";
import aesEncrypt from "../../crypto/aes-encrypt";
import hashingFunction from "../../crypto/hash";
import { useSendEncryptedDataMutation } from "./encryptionSlice";

interface IEncryptionProps {
  symmetricKey: number[];
}

export function Encryption(props: IEncryptionProps) {
  const [plainText, setPlainText] = useState<string>("");
  const [hashedText, setHashedText] = useState<string>("");
  const [aesCypheredText, setAesCypheredText] = useState<any>();
  const [sendEncryptionData, { isLoading: encryptionLoading }] =
    useSendEncryptedDataMutation();
  const key_128 = props.symmetricKey;

  function clearData() {
    setPlainText("");
    setHashedText("");
    setAesCypheredText("");
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <input
        onChange={(e) => {
          const inputVal = e.target.value;
          setPlainText(inputVal);
          // const hashedText = hashingFunction(inputVal);
          // setHashedText(hashedText);
        }}
        placeholder={"plain text"}
      />
      <p>my plain text is: {plainText}</p>
      {/* <p>my hashed text is: {hashedText}</p> */}

      <button
        onClick={() => {
          const encryptedByAes = aesEncrypt(plainText, key_128);
          sendEncryptionData(encryptedByAes);
          setAesCypheredText(encryptedByAes);
        }}
      >
        encrypt
      </button>
      <button
        onClick={() => {
          clearData();
        }}
      >
        clear
      </button>
      <p>my aes cyphered text is: {aesCypheredText}</p>
    </div>
  );
}
