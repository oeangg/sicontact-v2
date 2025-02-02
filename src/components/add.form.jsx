"use client";

import { SaveContact } from "@/actions/save.contact";
import { MdOutlineCancel, MdSave } from "react-icons/md";
import { useActionState } from "react";
import clsx from "clsx";
import { LinkBtn } from "./ui/link-btn";

export function AddFormContact({ selectGroup }) {
  const [state, formAction, pending] = useActionState(SaveContact, null);

  const classNameSave = clsx(
    "flex gap-2 justify-center items-center px-6 py-2 bg-twYellow text-foreground font-bold rounded-md border-2 border-foreground hover:bg-yellow-300 transition duration-300 shadow-[2px_2px_0_theme(colors.yellow.800)] hover:shadow-[4px_4px_0_theme(colors.yellow.800)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    {
      "opacity-40 cursor-progress": pending,
    }
  );

  return (
    <div className="w-full px-8 ">
      <form
        action={formAction}
        className="text-base font-normal flex flex-col gap-1"
      >
        <div className="flex justify-between gap-1">
          <label className="w-1/3" htmlFor="">
            Fullname{" "}
          </label>
          <input type="text" name="name" id="" className="px-3 py-1" />
        </div>
        <div
          className="text-right"
          id="name-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs  text-red-500 -mt-1 font-light ">
            {state?.Error.name}
          </p>
        </div>
        <div className="flex justify-between gap-1">
          <label className="w-1/3" htmlFor="">
            Phone{" "}
          </label>
          <input type="tel" name="phone" id="" className="px-3 py-1" />
        </div>
        <div
          className="text-right"
          id="phone-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-red-500 -mt-1 font-light ">
            {state?.Error.phone}
          </p>
        </div>
        <div className="flex justify-between gap-1">
          <label className="w-1/3" htmlFor="">
            Email{" "}
          </label>
          <input type="email" name="email" id="" className="px-3 py-1" />
        </div>
        <div
          className="text-right"
          id="email-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-red-500 -mt-1 font-light ">
            {state?.Error.email}
          </p>
        </div>
        <div className="flex justify-between gap-1">
          <label className="w-1/3" htmlFor="">
            City{" "}
          </label>
          <input type="city" name="city" id="" className="px-3 py-1" />
        </div>
        <div
          className="text-right"
          id="city-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-red-500 -mt-1 font-light ">
            {state?.Error.city}
          </p>
        </div>

        <div className="flex justify-between gap-1">
          <label className="w-1/3" htmlFor="">
            Group Contacts{" "}
          </label>
          <select name="groups" id="" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Select Group
            </option>
            {/* value group id wajib diisi */}
            {selectGroup.map((group, index) => (
              <option className="bg-transparent" key={index} value={group.id}>
                {" "}
                {group.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <div
          className="text-right"
          id="groups-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-red-500 -mt-1 font-light ">
            {state?.Error.groups}
          </p>
        </div>

        <div
          className="text-center"
          id="message-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-red-500 mt-2 font-light ">
            {state?.message}
          </p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <LinkBtn href="/contacts">
            Cancel
            <MdOutlineCancel size={20} className="text-foreground" />
          </LinkBtn>
          <button type="submit" className={classNameSave} disabled={pending}>
            {pending ? "Saving..." : "Save"} <MdSave size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
