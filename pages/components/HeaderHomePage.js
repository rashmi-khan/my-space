import Link from "next/link";
import React from "react";
import { SiSpacex } from "react-icons/si";
import { SiNasa } from "react-icons/si";

function Header() {
  return (
    <header className="absolute flex items-center justify-between px-4 w-full ">
      <div>
        <Link href="/">
          <SiNasa className="text-8xl  text-white " />
        </Link>
      </div>

      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 list-none font-semibold text-white text-sm lg:text-base">
          <li>
            <Link
              href="/datason"
              className="text-white text-sm lg:text-base hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500"
            >
              Data Sonification
            </Link>
          </li>
          <li>
            <Link
              href="/apod "
              className="text-white text-sm lg:text-base hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500 "
            >
              APOD
            </Link>
          </li>
          <li>
            <Link
              href="/launches"
              className="text-white text-sm lg:text-base hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500"
            >
              SpaceX Launch
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/">
          <SiSpacex className="text-8xl text-white " />
        </Link>
      </div>
    </header>
  );
}

export default Header;
