"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeLanguage } from "../globalRedux/features/language";

const DefaultComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        const lang = localStorage.getItem("lang");
        if (!lang) localStorage.setItem("lang", "en");
        dispatch(changeLanguage(lang || "en"));
        console.log(lang || "en");
      }
  }, [dispatch]);
  return <></>;
};

export default DefaultComponent;
