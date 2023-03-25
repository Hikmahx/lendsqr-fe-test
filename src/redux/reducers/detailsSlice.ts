import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { UsersDetails, Details } from "./types";

interface KnownError {
  errMessage: string;
}
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id

export const fetchUsersDetails = createAsyncThunk<UsersDetails, string>(
  "details/fetchUsersDetails",
  async (arg, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
      );
      const details = await data;
      return details;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchSingleUserDetails = createAsyncThunk<UsersDetails, string>(
  "details/fetchSingleUserDetails",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const details = await data;
      return details;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

interface DetailsState {
  error: boolean;
  loading: boolean;
  details: UsersDetails | [];
  usersDetails: Details | {};
  success: boolean;
  errMsg: string | undefined;
}

const initialState: DetailsState = {
  error: false,
  loading: false,
  details: [],
  usersDetails: {},
  success: false,
  errMsg: "" as string | undefined,
  // statusByName: {}
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersDetails.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchUsersDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
      state.errMsg = "";
    });
    builder.addCase(fetchUsersDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });

    builder.addCase(fetchSingleUserDetails.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchSingleUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.usersDetails = action.payload;
      state.errMsg = "";
    });
    builder.addCase(fetchSingleUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
  },
});

export default detailsSlice.reducer;
