import { GridContact } from "@/components/grid.contact";
import { SumContacts } from "@/components/sum.contacts";
import { GetContactsPages } from "@/actions/get.contacts";
import { Pagination } from "@/components/pagination";
import { SearchBox } from "@/components/search";
import { GrGroup } from "react-icons/gr";
import { IoAddSharp } from "react-icons/io5";

import React, { Suspense } from "react";
import { LinkBtn } from "@/components/ui/link-btn";
import { Loading } from "@/components/loading";

export default async function ContactPage({ searchParams }) {
  const { query } = await searchParams;
  const { page } = await searchParams;

  const totalPages = await GetContactsPages(query);

  return (
    <div>
      <div className="flex justify-end p-8 gap-2 w-full ">
        <SearchBox />
        <LinkBtn href="/contacts/add">
          Add <IoAddSharp size={20} />
        </LinkBtn>
        <LinkBtn href="/contacts/group">
          <GrGroup size={20} />
        </LinkBtn>
      </div>
      <Suspense fallback={<Loading />}>
        <GridContact query={query} currentPages={page} />

        <SumContacts query={query} />

        <div className="w-full flex justify-center items-center mb-6">
          <Pagination totalPages={totalPages} />
        </div>
      </Suspense>
    </div>
  );
}
