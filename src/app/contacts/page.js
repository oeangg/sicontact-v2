import { GridContact } from "@/components/grid.contact";
import { SumContacts } from "@/components/sum.contacts";
import { GetContactsPages } from "@/actions/get.contacts";
import { Pagination } from "@/components/pagination";
import { SearchBox } from "@/components/search";
import { BtnAddContact, BtnAddGroup } from "@/components/btn";

import React from "react";

export default async function ContactPage({ searchParams }) {
  const { query } = await searchParams;
  const { page } = await searchParams;

  const totalPages = await GetContactsPages(query);

  return (
    <div>
      <div className="flex justify-end p-8 gap-2 w-full ">
        <SearchBox />
        <BtnAddContact />
        <BtnAddGroup />
      </div>

      <GridContact query={query} currentPages={page} />

      <SumContacts query={query} />

      <div className="w-full flex justify-center items-center mb-6">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
