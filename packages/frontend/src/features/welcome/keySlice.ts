import { IShareSymmetricKeyBody } from "../../interfaces/interfaces";
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
      query: (symmetricKey: IShareSymmetricKeyBody) => ({
        url: "share-symmetric-key",
        method: "POST",
        data: null,
        body: symmetricKey,
      }),
    }),
  }),
});

export const { useGetPublicKeyQuery, useShareSymmetricKeyMutation } =
  extendedKeySlice;
