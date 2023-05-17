import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "64626d95208980a54e6bdd56",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
