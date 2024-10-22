import { GetContacts } from "@/actions/gets.data";
import { FormatDate } from "@/utils/format.date";
import { BtnDeleteContact, BtnEditContact } from "./btn";
export async function GridContact() {
  const contacts = await GetContacts();

  return (
    <div className="w-full px-6 pb-4 ">
      <table className="w-full text-left">
        <thead className="uppercase text-foreground">
          <tr>
            <th className="text-sm font-light py-2 px-3 ">Name</th>
            <th className="text-sm font-light py-2 px-3">Phone</th>
            <th className="text-sm font-light py-2 px-3">City</th>
            <th className="text-sm font-light py-2 px-3 ">Group</th>
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
              className=" bg-teal-50 text-sm   border-b-8 border-background font-normal  text-foreground   "
            >
              <td className=" py-3 px-3  ">{contact.name}</td>
              <td className="py-3 px-3">{contact.phone}</td>
              <td className=" py-3 px-3">{contact.city}</td>
              <td className=" py-3 px-3 ">{contact.group.name}</td>
              <td className=" py-3 px-3 ">
                {FormatDate(contact.createdAt.toString())}
              </td>
              <td className="text-right py-3  flex flex-row justify-center items-center gap-1 ">
                <BtnEditContact /> <BtnDeleteContact />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
