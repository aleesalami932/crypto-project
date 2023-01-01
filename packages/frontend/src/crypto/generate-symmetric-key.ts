export function generateSymmetricKey() {
  const symmetricKey: number[] = [];
  for (let i = 0; i < 16; i++) {
    const number = Math.floor(Math.random() * 20);
    symmetricKey.push(number);
  }
  const stringSymmetricKey = symmetricKey;
  return stringSymmetricKey;
}
