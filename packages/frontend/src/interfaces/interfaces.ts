export interface IShareSymmetricKeyBody {
  password: string;
  keyOwner: string;
  key: string;
}
export interface IEncryptionDataBody {
  dataOwner: string;
  cipherText: string;
}
