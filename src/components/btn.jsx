"use client";

import Link from "next/link";
import { IoAddSharp, IoPencilSharp } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { DeleteContact } from "@/actions/delete.contact";

export function BtnAddContact() {
  return (
    <Link
      className="w-1/5 flex justify-center border-2 border-twGreen items-center bg-transparent px-2 rounded-lg text-twGreen text-sm font-semibold tracking-wider hover:bg-twGreen hover:text-background"
      href="/contacts/add"
    >
      <IoAddSharp size={22} className="mr-2" /> Add
    </Link>
  );
}

export function BtnAddGroup() {
  return (
    <Link
      className=" flex justify-center  px-4 py-1 rounded-lg items-center bg-twGreen  text-background text-sm font-normal hover:opacity-80"
      href="/contacts/group"
    >
      <GrGroup size={20} />
    </Link>
  );
}

export function BtnEditContact({ id }) {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="flex justify-center   items-center  rounded-full bg-twYellow text-background group-hover:bg-foreground"
    >
      <IoPencilSharp size={20} className="p-1" />
    </Link>
  );
}

export function BtnClose() {
  return (
    <Link
      href="/contacts"
      className="flex-1 flex justify-center border-2 border-twGreen  items-center px-3 py-1 bg-transparent text-twGreen font-medium text-lg rounded-md hover:bg-twGreen hover:text-background"
    >
      Cancel
    </Link>
  );
}

export function BtnDeleteContact({ id }) {
  const deleteContactbyID = DeleteContact.bind(null, id);

  return (
    <form action={deleteContactbyID}>
      <button className="flex justify-center  items-center  rounded-full  text-twYellow group-hover:text-foreground">
        <TiDeleteOutline size={36} className="p-1" />{" "}
      </button>
    </form>
  );
}
