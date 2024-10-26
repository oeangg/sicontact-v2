import { GetContacts } from "@/actions/get.contacts";
import { FormatDate } from "@/utils/format.date";
import { BtnDeleteContact, BtnEditContact, BtnAddGroup } from "./btn";

import { IoPersonCircle } from "react-icons/io5";
export async function GridContact({ query, currentPages }) {
  const contacts = await GetContacts(query, currentPages);

  return (
    <div className="w-full px-6 pb-1   ">
      <table className="w-full text-left">
        <thead className="uppercase text-foreground">
          <tr>
            <th className="text-sm font-light py-2 px-3 ">#</th>
            <th className="text-sm font-light py-2 px-3 ">Name</th>
            <th className="text-sm font-light py-2 px-3">Phone</th>
            <th className="text-sm font-light py-2 px-3">City</th>
            <th className="text-sm font-light py-2 px-3 flex items-center gap-1 ">
              Group <BtnAddGroup />
            </th>
            <th className="text-sm font-light py-2 px-3 text-center ">
              Created Date
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr
              key={index}
              className=" bg-teal-50 text-sm   border-b-4 border-background font-normal  text-foreground   "
            >
              <td className="pl-3  ">
                <IoPersonCircle size={36} className=" text-teal-400" />
              </td>
              <td className=" py-2 pr-2 ">{contact.name}</td>
              <td className="py-2 px-2">{contact.phone}</td>
              <td className=" py-2 px-2">{contact.city}</td>
              <td className=" py-2 px-2 ">{contact.group.name}</td>
              <td className=" py-2 px-2 ">
                {FormatDate(contact.createdAt.toString())}
              </td>
              <td className="py-2   flex flex-row justify-center items-center gap-1">
                <BtnEditContact id={contact.id} />
                <BtnDeleteContact id={contact.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
