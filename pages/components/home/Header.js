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

      <nav className=" flex justify-between max-width grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-10">
        <ul className="flex gap-2 list-none font-semibold text-white text-sm lg:text-base">
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
          <li>
            <Link
              href="/roadster"
              className="text-white text-sm lg:text-base active:outline hover:rounded-md p-2 hover:bg-slate-700 active:bg-slate-500"
            >
              Roadster
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
