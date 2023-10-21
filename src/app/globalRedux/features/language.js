"use client"
import { createSlice } from "@reduxjs/toolkit";

const lang = localStorage.getItem("lang");

const langSlice = createSlice({
  name: "language",
  initialState: lang,
  reducers: {
    changeLanguage: (state, { payload }) => {
      const langToggle = state == "en" ? "fr" : "en"
      localStorage.setItem("lang", langToggle);
      return langToggle;
    },
  },
});

export default langSlice.reducer;
export const { changeLanguage } = langSlice.actions;
