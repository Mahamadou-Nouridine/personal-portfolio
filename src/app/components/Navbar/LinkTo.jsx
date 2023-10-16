"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkTo = ({ route, name }) => {
  const pathname = usePathname();

  const colorizeActiveLink = (path) =>
    pathname === path ? "navbar-link active" : "navbar-link";
  return (
    <Link href={route} className={colorizeActiveLink(route)} data-nav-link>
      {name}
    </Link>
  );
};

export default LinkTo;
