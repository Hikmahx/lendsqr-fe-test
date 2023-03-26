import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { UsersDetails, Details, UsersStatus } from "./types";

interface KnownError {
  errMessage: string;
}
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id
interface DetailsProps {
  page?: string;
  limit?: string;
  org?: string;
  username?: string;
  email?: string;
  date?: string;
  phone?: string;
  status?: string;
  search?: string;
}
export const fetchUsersDetails = createAsyncThunk(
  "details/fetchUsersDetails",
  async (
    {
      page = "1",
      limit = "10",
      org = "",
      username = "",
      email = "",
      date = "",
      phone = "",
      status = "",
      search = "",
    }: DetailsProps,
    { rejectWithValue }
  ) => {
    try {
      console.log(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${page}&limit=${limit}${org}${username}${email}${date}${phone}${status}${search}`
      );
      let { data } = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${page}&limit=${limit}${org}${username}${email}${date}${phone}${status}${search}`
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
      return [details];
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const storedUsersStatus = localStorage.getItem("storedUsersStatus")
  ? JSON.parse(localStorage.getItem("storedUsersStatus")!)
  : [];

interface DetailsState {
  error: boolean;
  loading: boolean;
  details: UsersDetails | [];
  userDetails: Details | [];
  success: boolean;
  errMsg: string | undefined;
  storedUsersStatus: UsersStatus | [];
  orgs: string[] | [];
}

const initialState: DetailsState = {
  error: false,
  loading: false,
  details: [],
  userDetails: [],
  success: false,
  errMsg: "" as string | undefined,
  storedUsersStatus,
  orgs: [],
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    updateUsersStatus: (state, { payload }) => {
      let users = JSON.parse(localStorage.getItem("storedUsersStatus")!) || [];

      // IF THE USER IS ALREADY IN THE STORAGE
      if (users.map((item: { id: any }) => item.id).includes(payload.id)) {
        for (let i = 0; i < users.length; i++) {
          // GET THE INDEX OF THE USER
          if (users[i].id === payload.id) {
            // UPDATE ITS STATUS
            users[i].status = payload.status;
          }
        }
      } else {
        // IF USER ISN'T IN THE STORAGE
        users = [...users, payload];
      }

      // SET THE STORAGE
      localStorage.setItem("storedUsersStatus", JSON.stringify(users));

      state.storedUsersStatus = JSON.parse(
        localStorage.getItem("storedUsersStatus")!
      );
    },
    getAllOrgs: (state) => {
      state.orgs = Array.from(
        new Set(state.details.map((item) => item.orgName))
      ).sort();
    },
  },
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
      state.userDetails = action.payload;
      state.errMsg = "";
    });
    builder.addCase(fetchSingleUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
  },
});

export const { updateUsersStatus, getAllOrgs } = detailsSlice.actions;
export default detailsSlice.reducer;
