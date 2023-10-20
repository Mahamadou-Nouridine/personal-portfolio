"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Providers({ children }) {
  const lang = localStorage.getItem("lang");
  if (!lang) localStorage.setItem("lang", "en");
  return <Provider store={store}>{children}</Provider>;
}
