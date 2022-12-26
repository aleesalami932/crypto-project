import { keySlice } from "../api/apiSlice";

export const extendedKeySlice = keySlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicKey: builder.query({
      query: () => ({
        url: "get-public-key",
        method: "GET",
        data: null,
      }),
    }),
    shareSymmetricKey: builder.mutation({
      query: (symmetricKey: string) => ({
        url: "share-symmetric-key",
        method: "POST",
        data: null,
        body: {
          id: 1,
          keyOwner: "Ali Salami",
          key: symmetricKey,
        },
      }),
    }),
  }),
});

export const { useGetPublicKeyQuery, useShareSymmetricKeyMutation } =
  extendedKeySlice;
