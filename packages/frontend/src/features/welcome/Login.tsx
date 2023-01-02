import React, { useState } from "react";
import { useShareSymmetricKeyMutation } from "./keySlice";
import hashingFunction from "../../crypto/hash";
interface ILoginProps {
  symmetricKey: string;
}
export default function Login(props: ILoginProps) {
  const [userName, setUserName] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [shareSymmetricKey, { isLoading: logingin, isSuccess: loginSuccess }] =
    useShareSymmetricKeyMutation();
  return (
    <div>
      <h3>Cryptography Project</h3>
      <h4>Welcome</h4>
      <input
        placeholder="Username"
        onChange={(e) => {
          if (e.target.value) setUserName(e.target.value);
        }}
        disabled={logingin || loginSuccess}
        style={{ margin: "10px" }}
      />
      <input
        placeholder="Password"
        onChange={(e) => {
          if (e.target.value) setPassword(e.target.value);
        }}
        type="password"
        disabled={logingin || loginSuccess}
        style={{ margin: "10px" }}
      />
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          const hashedPassword = hashingFunction(Password);
          const currentUser = {
            key: props.symmetricKey,
            keyOwner: userName,
            password: hashedPassword,
          };
          localStorage.setItem("owner", userName);
          shareSymmetricKey(currentUser);
        }}
        disabled={logingin || loginSuccess}
      >
        generate symmetric key
      </button>
    </div>
  );
}
