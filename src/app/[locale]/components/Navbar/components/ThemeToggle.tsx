"use client";

import React from "react";
import { useTranslations } from "next-intl";

import styles from "../styles/themeToggle.module.css";

const STORAGE_KEY = "nouridine-theme";

const ThemeToggle: React.FC = () => {
  const t = useTranslations("navbar");

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = next;

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={t("theme-toggle")}
      title={t("theme-toggle")}
    >
      {/* @ts-ignore */}
      <ion-icon name="sunny-outline" className={styles.sun}></ion-icon>
      {/* @ts-ignore */}
      <ion-icon name="moon-outline" className={styles.moon}></ion-icon>
    </button>
  );
};

export default ThemeToggle;
