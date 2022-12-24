import React, { useState } from "react";
import rsaEncrypt from "../../crypto/rsa-encrypt";
import { useGetPublicKeyQuery } from "./keySlice";

export function Key() {
  const [publicKey, setPublicKey] = useState(undefined);
  const { data } = useGetPublicKeyQuery("");
  const symmetricKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  console.log("data", data);
  if (data) {
    const plainText = symmetricKey.toString();
    const key = data.data;
    rsaEncrypt(key, plainText);
  }

  return <div>hello</div>;
}
