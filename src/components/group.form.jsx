"use client";

import Link from "next/link";
import clsx from "clsx";
import { MdOutlineCancel, MdSave } from "react-icons/md";
import { SaveGroupContact } from "@/actions/save.group";
import { useActionState } from "react";
import { LinkBtn } from "./ui/link-btn";

export function GridForm({ groups }) {
  const [state, formAction, pending] = useActionState(SaveGroupContact, null);

  const classNameSave = clsx(
    "flex gap-2 justify-center items-center px-6 py-2 bg-twYellow text-foreground font-bold rounded-md border-2 border-foreground hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_theme(colors.yellow.800)] hover:shadow-[4px_4px_0_theme(colors.yellow.800)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    {
      "opacity-40 cursor-progress": pending,
    }
  );

  return (
    <form
      action={formAction}
      className="w-full flex flex-col py-4 px-8 gap-2  "
    >
      <div className="w-full flex items-center justify-center gap-2 ">
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Name group.."
            className="px-3 py-2"
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <button type="submit" className={classNameSave} disabled={pending}>
            {pending ? "Saving..." : "Save"} <MdSave size={20} />
          </button>
          <LinkBtn href="/contacts">
            <MdOutlineCancel size={24} />
          </LinkBtn>
        </div>
      </div>

      <div
        className="text-left"
        id="name-error"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="text-xs  text-red-500 -mt-1 font-light ">
          {state?.Error.name}
        </p>
      </div>

      <table className="w-full text-left bg-foreground  text-base font-semibold p-2 ">
        <thead className="uppercase text-foreground">
          <tr className="text-background">
            <th className="text-sm font-light py-2 px-3 ">##</th>
            <th className="text-sm font-light py-2 px-3 ">Name</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr
              key={index}
              className=" bg-background text-sm   border-b-[1px] border-twGreen font-normal   text-foreground   "
            >
              <td className="  px-2 py-1  ">{index + 1}.</td>
              <td className=" px-2 py-1 ">{group.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
