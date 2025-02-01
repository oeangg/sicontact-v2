import React from "react";
import { GrContact } from "react-icons/gr";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="w-full relative h-screen bg-gradient-to-br from-background to-twYellow ">
      <div className=" absolute left-8 animate-pulse  top-8 hidden lg:flex gap-2">
        <Link href="/" className=" text-twGreen text-lg font-normal flex gap-1">
          <GrContact size={28} />{" "}
          <span className="bg-gradient-to-r font-extrabold from-twGreen to-twYellow text-transparent bg-clip-text">
            siContact
          </span>
        </Link>
      </div>
      <div className=" absolute animate-pulse right-8 top-8 hidden lg:flex gap-2 ">
        <Link href="/" className=" text-twGreen text-lg font-normal flex gap-1">
          <span className="bg-gradient-to-r font-extrabold from-twYellow to-twGreen text-transparent bg-clip-text">
            siContact
          </span>
          <GrContact size={28} />{" "}
        </Link>
      </div>
      <div className="max-w-4xl h-full  w-full mx-auto bg-background   flex flex-col gap-2 ">
        {children}
      </div>
    </div>
  );
}
