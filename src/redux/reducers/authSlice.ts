import { createSlice } from "@reduxjs/toolkit";
import type { User } from "./types";

const storedUserInfo = localStorage.getItem("storedUserInfo")
  ? JSON.parse(localStorage.getItem("storedUserInfo")!)
  : [];

interface UserState {
  error: boolean;
  loading: boolean;
  storedUserInfo: User | [];
  success: boolean;
  errMsg: string;
  loginSuccessful: boolean;
  authToken: string | null;
  registrationSuccess: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: false,
    loading: false,
    storedUserInfo,
    success: false,
    errMsg: "",
    loginSuccessful: false,
    authToken: localStorage.getItem("authToken") || null,
    registrationSuccess: false,
  } as unknown as UserState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem("storedUserInfo", JSON.stringify(action.payload));
      state.storedUserInfo = action.payload;
    },
    registerUser: (state, action) => {
      state.storedUserInfo = action.payload.user;
      state.authToken = action.payload.token;
      state.registrationSuccess = true;
      localStorage.setItem(
        "storedUserInfo",
        JSON.stringify(action.payload.user)
      );
      localStorage.setItem("authToken", action.payload.token);
    },
    logout: (state) => {
      localStorage.removeItem("storedUserInfo");
      localStorage.removeItem("authToken");
      state.loading = false;
      state.storedUserInfo = [];
      state.error = false;
      state.loginSuccessful = false;
      state.authToken = null;
    },
  },
});
export const { logout, loginUser, registerUser } = authSlice.actions;
export default authSlice.reducer;
