"use client";

import { UpdateContact } from "@/actions/save.contact";
import { useActionState } from "react";
import { MdOutlineCancel, MdSave } from "react-icons/md";

import clsx from "clsx";
import { LinkBtn } from "./ui/link-btn";

export function UpdateFormContact({ selectGroup, contact }) {
  const updateContactByID = UpdateContact.bind(null, contact.id);
  const [state, formAction, pending] = useActionState(updateContactByID, null);

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
          <input
            className="w-2/3 p-1 rounded-md border border-foreground focus:ring-1 focus:outline-none focus:ring-foreground"
            type="text"
            name="name"
            id=""
            defaultValue={contact.name}
          />
        </div>
        <div
          className="text-right"
          id="name-error"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-xs text-red-500 -mt-1 font-light ">
            {state?.Error.name}
          </p>
        </div>
        <div className="flex justify-between gap-1">
          <label className="w-1/3" htmlFor="">
            Phone{" "}
          </label>
          <input
            type="tel"
            name="phone"
            id=""
            defaultValue={contact.phone}
            className="w-2/3 p-1 rounded-md border border-foreground focus:ring-1 focus:outline-none focus:ring-foreground"
          />
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
          <input
            type="email"
            name="email"
            id=""
            defaultValue={contact.email}
            className="w-2/3 p-1 rounded-md border border-foreground focus:ring-1 focus:outline-none focus:ring-foreground"
          />
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
          <input
            type="city"
            name="city"
            id=""
            defaultValue={contact.city}
            className="w-2/3 p-1 rounded-md border border-foreground focus:ring-1 focus:outline-none focus:ring-foreground"
          />
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
          <select
            name="groups"
            id=""
            className="w-2/3 p-1  rounded-md bg-white border   border-foreground focus:ring-1   focus:outline-none focus:ring-foreground cursor-pointer mb-5"
          >
            {selectGroup.map((group, index) =>
              contact.group.id === group.id ? (
                <option
                  className="bg-transparent"
                  key={index}
                  value={group.id}
                  selected
                >
                  {contact.group.name}
                </option>
              ) : (
                <option className="bg-transparent" key={index} value={group.id}>
                  {group.name}
                </option>
              )
            )}
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
            {" "}
            Cancel <MdOutlineCancel size={20} />{" "}
          </LinkBtn>
          <button type="submit" className={classNameSave} disabled={pending}>
            {pending ? "Updating..." : "Update"} <MdSave size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
