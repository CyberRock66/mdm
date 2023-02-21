import { createApi } from '@reduxjs/toolkit/query/react';
import { conduitBaseQuery } from '@/utilits/api.utilit';
import { IUser } from '@/types/models';
import { IRegistration } from './Registration.model';

export const registrationApi = createApi({
  reducerPath: 'registration',
  baseQuery: conduitBaseQuery,
  endpoints: (builder) => ({
    registration: builder.mutation<IUser, IRegistration>({
      query: (post) => ({
        url: `/users`,
        method: `Post`,
        body: post,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = registrationApi;
