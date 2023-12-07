"use client";

import Logo from "@images/logo.webp";
import Image from "next/image";
import Navigation from "./Navigation";
import { useState } from "react";
import "./header.css";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="sticky top-0 z-30 h-20 w-screen border-b bg-dominant px-3 py-2">
      <div className="mx-auto flex max-w-container items-center justify-between">
        <a className="flex items-center gap-1" href="/">
          <Image src={Logo} alt="logo" width="50" priority />
          <div>
            <h1 className="text-3xl font-bold text-accent">CVIP</h1>
            <p className="-mt-1 text-lg font-bold text-heading">2024</p>
          </div>
        </a>
        <Navigation toggleMenu={toggleMenu} />
        <button
          className="menu flex cursor-pointer rounded-md bg-inverted p-1 text-inverted -mobile:hidden"
          aria-label="Main Menu"
          onClick={(e) => {
            setToggleMenu((previous) => !previous);
            const btn = e.currentTarget;
            btn.classList.toggle("opened");
            btn.setAttribute(
              "aria-expanded",
              btn.classList.contains("opened") + ""
            );
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 100 100"
            className="h-6 w-6"
            stroke="currentColor"
          >
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
