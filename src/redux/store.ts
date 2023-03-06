import { configureStore } from '@reduxjs/toolkit';
import { registrationApi } from '@/features/auth/registration/Registration.api';
import { loginApi } from '@/features/auth/login/Login.api';

export const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registrationApi.middleware,
      loginApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
