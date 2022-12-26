import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const keySlice = createApi({
  reducerPath: "key",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/crypto/",
  }),
  endpoints: (builder) => ({}),
});

export const dataSlice = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/data/",
  }),
  endpoints: (builder) => ({}),
});
