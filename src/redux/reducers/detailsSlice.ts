import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { UserDetails } from "./types";

interface KnownError {
  errMessage: string;
}

export const fetchUserDetails = createAsyncThunk<UserDetails, string>(
  "pokemon/fetchByName",
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

interface DetailsState {
  error: boolean;
  loading: boolean;
  details: UserDetails | [];
  success: boolean;
  errMsg: string | undefined;
}

const initialState: DetailsState = {
  error: false,
  loading: false,
  details: [],
  success: false,
  errMsg: "" as string | undefined,
  // statusByName: {}
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
      state.errMsg = "";
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
  },
});

export default detailsSlice.reducer;
