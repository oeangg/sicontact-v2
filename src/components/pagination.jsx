"use client";

import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { GeneratePagination } from "@/utils/generate.page";

export function Pagination({ totalPages }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  //ambil posisi halaman sekarang dari params page
  const currentPages = Number(searchParams.get("page")) || 1;

  //set URL halaman
  function CreatePageURL(pageNumber) {
    const params = new URLSearchParams(searchParams);
    //membuat param bernama page isinya no halaman
    params.set("page", pageNumber.toString());
    //mengembalikan nilai yg isinya pathname & params
    return `${pathName}?${params.toString()}`;
  }
  //
  const allPages = GeneratePagination(currentPages, totalPages);

  function PaginationNumber({ page, href, position, isActive }) {
    const className = clsx(
      "flex h-10 w-10 items-center justify-center  text-sm border border-foreground rounded-full ",
      {
        // "rounded-l-sm": position === "first" || position === "single",
        // "rounded-r-sm": position === "last" || position === "single",
        "z-10 bg-white border-foreground text-foreground font-semibold":
          isActive,
        "z-10 bg-background text-foreground ": !isActive,
        "hover:bg-foreground hover:text-background":
          !isActive && position !== "middle",
        "text-foreground pointer-events-none": position === "middle",
      }
    );

    return isActive && position === "middle" ? (
      <div className={className}>{page}</div>
    ) : (
      <Link className={className} href={href}>
        {page}
      </Link>
    );
  }

  function PaginationArrow({ href, direction, isDisabled }) {
    const className = clsx(
      "flex h-10 w-10 items-center justify-center text-sm border border-foreground rounded-xl ",
      {
        "pointer-events-none bg-background  text-slate-200": isDisabled,
        "hover:bg-twYellow bg-foreground border-foreground hover:text-foreground text-background font-semibold":
          !isDisabled,
        "mr-2": direction === "right",
        "ml-2": direction === "left",
      }
    );

    const icon =
      direction === "right" ? (
        <HiChevronRight size={20} />
      ) : (
        <HiChevronLeft size={20} />
      );

    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link className={className} href={href}>
        {icon}
      </Link>
    );
  }
  return (
    <div className=" inline-flex gap-1 ">
      <PaginationArrow
        direction="left"
        href={CreatePageURL(currentPages - 1)}
        isDisabled={currentPages <= 1}
      />

      <div className="flex gap-1">
        {allPages.map((page, index) => {
          let position = "";
          if (index === 0) position = "first";
          if (index === allPages.lenght - 1) position = "last";
          if (allPages.lenght === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={index}
              page={page}
              href={CreatePageURL(page)}
              position={position}
              isActive={currentPages === page}
            />
          );
        })}
      </div>
      <PaginationArrow
        direction="right"
        href={CreatePageURL(currentPages + 1)}
        isDisabled={currentPages >= totalPages}
      />
    </div>
  );
}
