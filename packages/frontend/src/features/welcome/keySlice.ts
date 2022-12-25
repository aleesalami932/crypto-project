import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
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
        body: { symmetricKey: symmetricKey },
      }),
    }),
  }),
});

export const { useGetPublicKeyQuery, useShareSymmetricKeyMutation } =
  extendedApiSlice;
