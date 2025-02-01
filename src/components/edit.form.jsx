"use client";

import { UpdateContact } from "@/actions/save.contact";
import { useActionState } from "react";
import { BtnClose } from "./btn";
import clsx from "clsx";

export function UpdateFormContact({ selectGroup, contact }) {
  const updateContactByID = UpdateContact.bind(null, contact.id);
  const [state, formAction, pending] = useActionState(updateContactByID, null);

  const classNameSave = clsx(
    "flex-1 px-3 py-1 bg-twGreen text-background font-medium text-lg rounded-md hover:bg-foreground",
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
          <BtnClose />
          <button type="submit" className={classNameSave} disabled={pending}>
            {pending ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
