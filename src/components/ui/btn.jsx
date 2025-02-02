"use client";

import Link from "next/link";
import { IoPencilSharp } from "react-icons/io5";

import { TiDeleteOutline } from "react-icons/ti";
import { DeleteContact } from "@/actions/delete.contact";

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
