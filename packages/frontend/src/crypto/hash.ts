import hash from "hash.js";

export default function hashingFunction(plainText: string) {
  if (plainText !== "") {
    const hashed = hash.sha256().update(plainText).digest("hex");
    return hashed;
  } else {
    return "plain text is not defined ";
  }
}
