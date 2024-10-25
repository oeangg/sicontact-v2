"use client";

import Link from "next/link";
import clsx from "clsx";
import { SaveGroupContact } from "@/actions/save.group";
import { useActionState } from "react";

export function GridForm({ groups }) {
  const [state, formAction, pending] = useActionState(SaveGroupContact, null);

  const classNameSave = clsx(
    "flex-1 px-2 py-1 bg-foreground text-teal-50 font-light text-base rounded-md hover:bg-teal-600",
    {
      "opacity-40 cursor-progress": pending,
    }
  );

  return (
    <form action={formAction} className="w-full flex flex-col p-6 gap-2  ">
      <div className="w-full flex items-center justify-center gap-2 ">
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Name group.."
            className="w-full py-1 px-2 rounded-md border  border-teal-200 placeholder:text-sm placeholder:font-light focus:ring-1 focus:outline-none focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <button type="submit" className={classNameSave} disabled={pending}>
            {pending ? "Saving..." : "Save"}
          </button>
          <Link
            href="/contacts"
            className="w-1/2 px-2 py-1 flex justify-center items-center bg-foreground text-teal-50 font-light text-base rounded-md hover:bg-teal-600"
          >
            Close
          </Link>
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

      <table className="w-full text-left bg-teal-300 text-base font-medium p-2 ">
        <thead className="uppercase text-foreground">
          <tr>
            <th className="text-sm font-light py-2 px-3 ">##</th>
            <th className="text-sm font-light py-2 px-3 ">Name</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr
              key={index}
              className=" bg-teal-50 text-sm   border-b-2 border-background font-normal   text-foreground   "
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
