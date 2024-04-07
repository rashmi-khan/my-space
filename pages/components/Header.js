import Link from "next/link";
import React from "react";
import { SiSpacex } from "react-icons/si";
import { SiNasa } from "react-icons/si";

function Header() {
  return (
    <header className=" absolute flex items-center justify-between px-5 w-full">
      <div>
        <Link href="/">
          {/* {Icons} */}
          <SiNasa className="text-8xl  text-white " />
          <SiSpacex className="text-8xl text-white" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/apod " className="text-white text-sm lg:text-base">
              NASA: APOD
            </Link>
          </li>
          {/* <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
