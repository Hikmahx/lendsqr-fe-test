import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";

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
  } as unknown as UserState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem("storedUserInfo", JSON.stringify(action.payload));
      state.storedUserInfo = action.payload;
    },
    // removeError: (state, { payload }) => {
    //   state.error = false;
    // },
    logout: (state) => {
      localStorage.removeItem("storedUserInfo");
      state.loading = false;
      state.storedUserInfo = [];
      state.error = false;
      state.loginSuccessful = false;
    },
  },
});
export const { logout, loginUser } = authSlice.actions;
export default authSlice.reducer;
