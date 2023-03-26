import { createSlice } from "@reduxjs/toolkit";

interface SharedState {
  showAside: boolean;
  text: string;
}

const initialState: SharedState = {
  showAside: false,
  text: "",
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    asideToggle: (state, { payload }) => {
      state.showAside = payload;
    },
    setText: (state, { payload }) => {
      state.text = payload;
    },
  },
});

export const { asideToggle, setText } = sharedSlice.actions;
export default sharedSlice.reducer;
