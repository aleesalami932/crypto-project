import React, { useState } from "react";
import aesEncrypt from "../../crypto/aes-encrypt";
import { useSendEncryptedDataMutation } from "./encryptionSlice";

interface IEncryptionProps {
  symmetricKey: number[];
}

export function Encryption(props: IEncryptionProps) {
  const [plainText, setPlainText] = useState<string>("");
  const [aesCypheredText, setAesCypheredText] = useState<any>();
  const [sendEncryptionData, { isLoading: encryptionLoading }] =
    useSendEncryptedDataMutation();
  const key_128 = props.symmetricKey;
  const dataOwner = localStorage.getItem("owner");
  function clearData() {
    setPlainText("");
    setAesCypheredText("");
  }
  return (
    <div>
      <input
        onChange={(e) => {
          const inputVal = e.target.value;
          setPlainText(inputVal);
        }}
        placeholder={"plain text"}
        disabled={encryptionLoading}
        style={{ margin: "10px" }}
      />
      <p style={{ margin: "10px" }}>my plain text is: {plainText}</p>

      <button
        onClick={() => {
          const encryptedByAes = aesEncrypt(plainText, key_128);
          if (dataOwner) {
            sendEncryptionData({
              cipherText: encryptedByAes,
              dataOwner: dataOwner,
            });
          }
          setAesCypheredText(encryptedByAes);
        }}
        disabled={encryptionLoading}
        style={{ margin: "10px" }}
      >
        encrypt
      </button>
      <button
        onClick={() => {
          clearData();
        }}
        disabled={encryptionLoading}
        style={{ margin: "10px" }}
      >
        clear
      </button>
      <p style={{ margin: "10px" }}>
        my aes ciphered text is: {aesCypheredText}
      </p>
    </div>
  );
}
