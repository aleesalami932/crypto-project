import React, { useState } from "react";
import aesDecrypt from "./aes-decrypt";
import aesEncrypt from "./aes-encrypt";
import hashingFunction from "./hash";

export function Counter() {
  const [plainText, setPlainText] = useState<string>("");
  const [hashedText, setHashedText] = useState<string>("");
  const [aesCypheredText, setAesCypheredText] = useState<any>();
  const [aesDecryptedText, setAesDecryptedText] = useState<any>();
  const key_128 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  function clearData() {
    setPlainText("");
    setHashedText("");
    setAesCypheredText("");
    setAesDecryptedText("");
  }
  return (
    <div>
      <input
        style={{ margin: "10px" }}
        onChange={(e) => {
          const inputVal = e.target.value;
          setPlainText(inputVal);
          const hashedText = hashingFunction(inputVal);
          setHashedText(hashedText);
        }}
        placeholder={"plain text"}
      />
      <p style={{ textAlign: "start", paddingLeft: "10px" }}>
        my plain text is: {plainText}
      </p>
      <p style={{ textAlign: "start", paddingLeft: "10px" }}>
        my hashed text is: {hashedText}
      </p>

      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => {
          const encryptedByAes = aesEncrypt(plainText, key_128);
          setAesCypheredText(encryptedByAes);
        }}
      >
        encrypt
      </button>
      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => {
          const decryptedByAes = aesDecrypt(aesCypheredText, key_128);
          setAesDecryptedText(decryptedByAes);
        }}
      >
        decrypt
      </button>
      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => {
          clearData();
        }}
      >
        clear
      </button>
      <p style={{ textAlign: "start", paddingLeft: "10px" }}>
        my aes cyphered text is: {aesCypheredText}
      </p>
      <p style={{ textAlign: "start", paddingLeft: "10px" }}>
        my aes decrypted text is: {aesDecryptedText}
      </p>
    </div>
  );
}
