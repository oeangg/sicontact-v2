import { SearchBox } from "@/components/search";
import { BtnAddContact } from "@/components/btn";
import { GridContact } from "@/components/grid.contact";
import { SumContacts } from "@/components/sum.contacts";
import { GetContactsPages } from "@/actions/get.contacts";
import { Pagination } from "@/components/pagination";
import Link from "next/link";

export default async function ContactPage({ searchParams }) {
  const { query } = await searchParams;
  const { page } = await searchParams;

  const totalPages = await GetContactsPages(query);

  return (
    <div className=" w-full h-screen bg-foreground py-10 px-4 sm:px-0 shadow-xl">
      <div className="max-w-4xl   w-full mx-auto bg-background  rounded-xl   flex flex-col gap-1  items-center ">
        <div className="flex  gap-2 w-full px-5 pt-7 pb-4 ">
          <Link href="/" className="w-2/5">
            <h1 className=" text-3xl text-red-300 font-bold font-Pacifico ">
              Si<span className="text-red-400 text-4xl">Contacts/...</span>
            </h1>
          </Link>
          <SearchBox />
          <BtnAddContact />
        </div>
        <GridContact query={query} currentPages={page} />
        <SumContacts query={query} />
        <div className="w-full flex justify-center items-center mb-6">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <p className="pt-8 text-teal-100 font-light text-xs text-center">
        Made with 😍 by Subhan Mohammad
      </p>
    </div>
  );
}
