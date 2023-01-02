import { IEncryptionDataBody } from "../../interfaces/interfaces";
import { dataSlice } from "../api/apiSlice";

export const extendedDataEncryptionSlice = dataSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendEncryptedData: builder.mutation({
      query: (cipher: IEncryptionDataBody) => ({
        url: "send-encrypted-data",
        method: "POST",
        data: null,
        body: cipher,
      }),
    }),
  }),
});

export const { useSendEncryptedDataMutation } = extendedDataEncryptionSlice;
