import React from "react";
import Link from "next/link";

export const LinkBtn = ({ href, children }) => {
  return (
    <Link
      className="flex gap-2 justify-center items-center px-6 py-2 bg-twYellow text-foreground font-bold rounded-md border-2 border-foreground hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_theme(colors.yellow.800)] hover:shadow-[4px_4px_0_theme(colors.yellow.800)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
      href={href}
    >
      {children}
    </Link>
  );
};
