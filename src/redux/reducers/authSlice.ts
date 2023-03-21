import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./types";

export const loginUser = createAsyncThunk<User, string>(
  "auth/loginUser",
  async (email, password) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let { data } = await axios.post(
        "https://gbezhon-api.onrender.com/user/login",
        { email, password },
        config
      );

      let token = data.user.authToken;
      localStorage.setItem("authToken", token);
      return token;
    } catch (err) {
      console.log("error", err);
      // return rejectWithValue(err);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // const { auth } = getState();
      // const config = {
      //   headers: {
      //     // 'x-auth-token': auth.authToken,
      //     Authorization: "Bearer " + auth.authToken,
      //   },
      // };
      // const { data } = await axios.get(
      //   "https://gbezhon-api.onrender.com/user/details",
      //   config
      // );
      // return data.user;
    } catch (err) {
      console.log("error", err);
      return rejectWithValue(err);
    }
  }
);

// initialize authToken from local storage
const authToken = localStorage.getItem("authToken")
  ? localStorage.getItem("authToken")
  : null;

interface UserState {
  error: boolean;
  loading: boolean;
  userInfo: null;
  authToken: string;
  success: boolean;
  errMsg: string;
  loginSuccessful: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: false,
    loading: false,
    userInfo: null,
    authToken,
    success: false,
    errMsg: "",
    loginSuccessful: false,
  },
  reducers: {
    removeError: (state, { payload }) => {
      state.error = false;
    },
    logout: (state) => {
      localStorage.removeItem("authToken");
      state.loading = false;
      state.userInfo = null;
      state.authToken = "";
      state.error = false;
      state.loginSuccessful = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.loginSuccessful = false;
      state.error = false;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      // state.userInfo = payload.user
      // state.authToken = payload;
      state.loginSuccessful = true;
      state.errMsg = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.loginSuccessful = false;
      state.error = true;
      // state.errMsg = action.payload.response
      //   ? action.payload.response.data.message
      //   : action.payload.message;
      // if (action.payload) {
      //   // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
      //   state.error = action.payload.errorMessage
      // } else {
      //   state.error = action.error
      // }
    });
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      // state.userInfo = action.payload;
      state.errMsg = "";
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      // state.errMsg = action.payload.response
      //   ? action.payload.response.data.message
      //   : action.payload.message;
      // state.errMsg = action.payload || action.error.message
    });
  },
});
export const { removeError, logout } = authSlice.actions;
export default authSlice.reducer;
