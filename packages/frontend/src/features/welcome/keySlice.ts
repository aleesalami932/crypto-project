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
  }),
});

export const { useGetPublicKeyQuery } = extendedApiSlice;
