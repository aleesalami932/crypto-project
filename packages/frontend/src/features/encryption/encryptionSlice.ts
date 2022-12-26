import { dataSlice } from "../api/apiSlice";

export const extendedDataEncryptionSlice = dataSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendEncryptedData: builder.mutation({
      query: (cipherText: string) => ({
        url: "send-encrypted-data",
        method: "POST",
        data: null,
        body: {
          cipherText: cipherText,
          dataOwner: "Ali Salami",
          id: 1,
        },
      }),
    }),
  }),
});

export const { useSendEncryptedDataMutation } = extendedDataEncryptionSlice;
