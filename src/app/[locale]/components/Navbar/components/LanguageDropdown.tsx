"use client";
import React, { useState } from "react";
import styles from "../styles/languagedropdown.module.css";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname().slice(3);

  const generateNewLink = (local: string) => {
    return `/${local}${path}`;
  };

  return (
    <div className={styles["dropdown"]}>
      <button
        onClick={() => setOpen(!open)}
        className="form-btn m-auto"
        type="submit"
        data-form-btn
      >
        <span className="fi fi-us"></span>{" "}
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
        <Link
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
        </Link>
      </div>
    </div>
  );
};

export default LanguageDropdown;
