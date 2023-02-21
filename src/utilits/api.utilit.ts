import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const conduitBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API,
  prepareHeaders: (headers: Headers) => {
    headers.set('Accept', `application/json`);
    return headers;
  },
});
