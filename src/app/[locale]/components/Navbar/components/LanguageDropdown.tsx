"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/languagedropdown.module.css";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface props {
  local: string;
}

const locals = [
  {
    name: "EN",
    local: "en",
    flag: "us",
  },
  {
    name: "FR",
    local: "fr",
    flag: "fr",
  },
  {
    name: "AR",
    local: "ar",
    flag: "sa",
  },
];

const LanguageDropdown: React.FC<props> = ({ local: lang }) => {
  const [open, setOpen] = useState(false);
  const path = usePathname().slice(3);

  const generateNewLink = (local: string) => {
    return `/${local}${path}`;
  };

  useEffect(() => {}, [])

  return (
    <div className={styles["dropdown"]}>
      <button
        onClick={() => setOpen(!open)}
        className={`${styles.language_dropdown_btn} form-btn m-auto`}
        type="submit"
        data-form-btn
      >
        <span
          className={`fi fi-${locals.find((l) => l.local == lang)?.flag}`}
        ></span>{" "}
        <Image
          alt="chevron"
          width={13}
          height={13}
          style={{ color: "var(--orange-yellow-crayola)" }}
          src="/assets/images/svg-icons/chevron-down-outline.svg"
        />
      </button>
      <div
        className={`${styles["dropdown-content"]}`}
        style={{ display: open ? "block" : "none" }}
      >
        {locals.map((local, key) =>
          local.local == lang ? (
            <Link
              key={key}
              className={`${styles["selected"]}`}
              style={{ color: "black" }}
              href={generateNewLink(local.local)}
            >
              <span className={`fi fi-${local.flag}`}></span>
              <span>{local.name}</span>
            </Link>
          ) : (
            <Link key={key} href={generateNewLink(local.local)}>
              <span className={`fi fi-${local.flag}`}></span>
              <span>{local.name}</span>
            </Link>
          )
        )}
        {/* <Link
          className={`${styles["selected"]}`}
          style={{ color: "black" }}
          href={generateNewLink("en")}
        >
          <span className="fi fi-us"></span>
          <span>EN-English</span>
        </Link>
        <Link href={generateNewLink("fr")}>
          <span className="fi fi-fr"></span>
          <span>(Bientôt!)</span>
        </Link> */}
      </div>
    </div>
  );
};

export default LanguageDropdown;
