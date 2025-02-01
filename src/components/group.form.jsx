"use client";

import Link from "next/link";
import clsx from "clsx";
import { SaveGroupContact } from "@/actions/save.group";
import { useActionState } from "react";

export function GridForm({ groups }) {
  const [state, formAction, pending] = useActionState(SaveGroupContact, null);

  const classNameSave = clsx(
    "flex-1 px-2 py-2 bg-background text-twGreen border-2 border-twGreen font-light text-sm rounded-md hover:bg-twGreen hover:text-background",
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
            className="w-full py-2 px-2 rounded-md border placeholder:text-twGreen  border-twGreen placeholder:text-xs placeholder:font-light focus:ring-1 focus:outline-none focus:ring-twGreen"
          />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <button type="submit" className={classNameSave} disabled={pending}>
            {pending ? "Saving..." : "Save"}
          </button>
          <Link
            href="/contacts"
            className="w-1/2 px-2 py-2 flex justify-center items-center bg-twGreen text-background border-2 border-twGreen font-light text-sm rounded-md hover:opacity-80"
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

      <table className="w-full text-left bg-twGreen  text-base font-semibold p-2 ">
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
