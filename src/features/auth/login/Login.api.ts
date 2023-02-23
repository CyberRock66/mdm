import { createApi } from '@reduxjs/toolkit/query/react';
import { conduitBaseQuery } from '@/utilits/api.utilit';
import { IUser } from '@/types/models';
import { ILogin } from './Login.model';

export const loginApi = createApi({
  reducerPath: 'Login',
  baseQuery: conduitBaseQuery,
  endpoints: (builder) => ({
    Login: builder.mutation<IUser, ILogin>({
      query: (post) => ({
        url: `/users/login`,
        method: `Post`,
        body: post,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
