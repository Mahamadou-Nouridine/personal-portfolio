"use client"
import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language",
  initialState: "en",
  reducers: {
    changeLanguage: (state, { payload }) => {
      return payload;
    },
  },
});

export default langSlice.reducer;
export const { changeLanguage } = langSlice.actions;
