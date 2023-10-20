import { createSlice } from "@reduxjs/toolkit";

const lang = localStorage.getItem("lang");

const langSlice = createSlice({
  name: "language",
  initialState: lang,
  reducers: {
    changeLanguage: (state, { payload }) => {
      localStorage.setItem("lang", state == "en" ? "fr" : "en");
      return state === "en" ? "fr" : "en";
    },
  },
});

export default langSlice.reducer;
export const { changeLanguage } = langSlice.actions;
