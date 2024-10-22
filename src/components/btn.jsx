import Link from "next/link";
import { IoAddCircleSharp, IoPencil, IoTrash } from "react-icons/io5";

export function BtnAddContact() {
  return (
    <Link
      className="w-1/5 flex justify-center items-center bg-foreground px-2 rounded-md text-background text-sm font-normal"
      href="/contacts/add"
    >
      <IoAddCircleSharp size={20} className="mr-2" /> Add Contact
    </Link>
  );
}

export function BtnEditContact() {
  return (
    <Link href="/contacts/edit" className="flex justify-center items-center">
      <IoPencil size={18} />
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

export function BtnDeleteContact() {
  return (
    <button className="flex justify-center items-center">
      <IoTrash size={18} />{" "}
    </button>
  );
}
