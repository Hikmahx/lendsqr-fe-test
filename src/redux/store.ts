import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./reducers/sharedSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    shared: sharedReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
