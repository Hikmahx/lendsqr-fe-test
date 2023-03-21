import { createSlice } from "@reduxjs/toolkit";

const sharedSlice = createSlice({
  name: "shared",
  initialState: {
    showAside: false,
  },
  reducers: {
    asideToggle: (state, { payload }) => {
      state.showAside = payload;
    },
  },
});

export const { asideToggle } = sharedSlice.actions;
export default sharedSlice.reducer;
