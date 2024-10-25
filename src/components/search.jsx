"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBox() {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  //function ketika on change di input search
  //use debounce call back untuk memberikan delay ketika request ke server
  const handleSearch = useDebouncedCallback((query) => {
    //deklarasi params = bikin URL baru
    const params = new URLSearchParams(searchParam);
    //jika ada inputan query maka bikin params , name params=query isinya query
    params.set("page", "1");
    //selain itu delete params
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    //update URL di params sesuai inputan di query
    router.replace(`${pathname}?${params.toString()}`);
  }, 200);
  return (
    <form action="" className="w-2/5 relative flex  items-center ">
      <IoSearchOutline
        size={24}
        className="text-foreground absolute left-4 top-3  "
      />
      <input
        type="text"
        name="search"
        id=""
        onChange={(e) => handleSearch(e.target.value)}
        //buat defaul value sama seuai isian params dan sebaliknya
        defaultValue={searchParam.get("query")?.toString()}
        placeholder="Search name or phone number..."
        className="px-12 py-2 w-full placeholder:text-xs placeholder:font-thin rounded-md bg-teal-50 border-2 border-foreground focus:outline-none focus:ring-1 focus:ring-foreground "
      />
    </form>
  );
}
