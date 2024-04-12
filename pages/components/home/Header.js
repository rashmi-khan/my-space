import Link from "next/link";
import React from "react";
import { SiSpacex } from "react-icons/si";
import { SiNasa } from "react-icons/si";

export default function HeaderHomePage() {
  return (
    <header className="absolute flex items-center justify-between px-4 w-full ">
      <div>
        <Link href="/">
          <SiNasa className="text-8xl  text-white " />
        </Link>
      </div>
{/* previous styles for nav {flex justify-between items-center} */}
      <nav className=" max-width grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 px-20">
        <ul className="flex gap-4 list-none font-semibold text-white text-sm lg:text-base">
          <li>
            <Link
              href="/datasonification"
              className="text-white text-sm lg:text-base active:outline hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500"
            >
              Data Sonification
            </Link>
          </li>
          <li>
            <Link
              href="/apod "
              className="text-white text-sm lg:text-base active:outline hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500 "
            >
              APOD
            </Link>
          </li>
          <li>
            <Link
              href="/launches"
              className="text-white text-sm lg:text-base active:outline hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500"
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
