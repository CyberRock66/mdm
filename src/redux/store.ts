import { configureStore } from '@reduxjs/toolkit';
import { registrationApi } from '@/features/auth/registration/Registration.api';

export const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([registrationApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
