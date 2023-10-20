"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import langReducer from "./features/language";

const rootReducer = combineReducers({
  counter: counterReducer,
  language: langReducer
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
