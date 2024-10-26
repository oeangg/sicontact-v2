"use client";

import Link from "next/link";
import { IoAddSharp, IoPencilSharp, IoTrash, IoPeople } from "react-icons/io5";
import { DeleteContact } from "@/actions/delete.contact";

export function BtnAddContact() {
  return (
    <Link
      className="w-1/5 flex justify-center items-center bg-foreground px-2 rounded-lg text-background text-sm font-medium hover:bg-teal-600"
      href="/contacts/add"
    >
      <IoAddSharp size={20} className="mr-2" /> Add
    </Link>
  );
}

export function BtnAddGroup() {
  return (
    <Link
      className=" flex justify-center items-center bg-transparent  text-teal-500 text-sm font-normal"
      href="/group"
    >
      <IoPeople size={20} />
    </Link>
  );
}

export function BtnEditContact({ id }) {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="flex justify-center  items-center  rounded-full bg-teal-400 text-teal-50"
    >
      <IoPencilSharp size={22} className="p-1" />
    </Link>
  );
}

export function BtnClose() {
  return (
    <Link
      href="/contacts"
      className="flex-1 flex justify-center items-center px-3 py-1 bg-foreground text-teal-50 font-medium text-lg rounded-md hover:bg-teal-600"
    >
      Cancel
    </Link>
  );
}

export function BtnDeleteContact({ id }) {
  const deleteContactbyID = DeleteContact.bind(null, id);

  return (
    <form action={deleteContactbyID}>
      <button className="flex justify-center  items-center  rounded-full bg-red-400 text-teal-50">
        <IoTrash size={22} className="p-1" />{" "}
      </button>
    </form>
  );
}
