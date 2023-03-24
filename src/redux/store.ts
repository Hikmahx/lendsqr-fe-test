import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./reducers/sharedSlice";
import authReducer from "./reducers/authSlice";
import detailsReducer from "./reducers/detailsSlice";

export const store = configureStore({
  reducer: {
    shared: sharedReducer,
    auth: authReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
