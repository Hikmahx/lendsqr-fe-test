import { createSlice } from "@reduxjs/toolkit";

interface SharedState {
  showAside: boolean;
}

const initialState: SharedState = {
  showAside: false,
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    asideToggle: (state, { payload }) => {
      state.showAside = payload;
    },
  },
});

export const { asideToggle } = sharedSlice.actions;
export default sharedSlice.reducer;
