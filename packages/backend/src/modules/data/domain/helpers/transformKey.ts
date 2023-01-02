export default function transformKey(key: string) {
  const keyArray = key.split(',');
  const symmetricKey: number[] = [];
  for (let i = 0; i < keyArray.length; i++) {
    const temp = parseInt(keyArray[i]);
    symmetricKey[i] = temp;
  }
  return symmetricKey;
}
