import { GetContacts } from "@/actions/get.contacts";
import { BtnDeleteContact, BtnEditContact } from "./btn";
// import { MdWhatsapp, MdOutlineEmail } from "react-icons/md";

import React from "react";
import photo1 from "../assets/profil1.jpg";
import photo2 from "../assets/profil2.jpg";
import photo3 from "../assets/profil3.jpg";
import Image from "next/image";

export async function GridContact({ query, currentPages }) {
  const contacts = await GetContacts(query, currentPages);

  return (
    <ul className="w-full px-6 pb-1 grid grid-cols-4 gap-4">
      {contacts.map((contact, index) => (
        <li
          key={index}
          className=" group transition-all duration-300 ease-in hover:bg-twGreen       bg-transparent  shadow-sm shadow-twGreen w-full  rounded-xl flex text-center flex-col gap-2 justify-center items-center  px-4 pt-4"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden ring-1 ring-twGreen border-4 border-background group-hover:ring-background">
            <Image
              src={index % 2 === 0 ? photo3 : photo2}
              alt="photo profil"
              style={{ height: "auto", width: "auto", objectFit: "cover" }}
            />
          </div>
          <p className="w-full group-hover:text-background uppercase font-extralight text-twGreen tracking-tighter text-base group-hover:font-normal ">
            {contact.name}
          </p>

          <div className="-space-y-1 text-twGreen text-xs font-thin group-hover:text-background">
            <p className="uppercase  ">{contact.phone}</p>
            <p className=" uppercase">{contact.city}</p>
            <p className=" uppercase ">{contact.group.name}</p>
          </div>
          <div className="flex justify-between w-full flex-row items-center p-1 rounded-md  ">
            <BtnEditContact id={contact.id} />
            {/* <div className="py-2   flex flex-row justify-center text-twYellow items-center gap-1 group-hover:text-background">
              <MdWhatsapp size={22} />
              <MdOutlineEmail size={22} />
            </div> */}
            <BtnDeleteContact id={contact.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
