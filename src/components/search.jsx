import { IoSearchOutline } from "react-icons/io5";
export function SearchBox() {
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
        placeholder="Search Contact ..."
        className="px-12 py-2 w-full rounded-md bg-teal-50 border-2 border-foreground focus:outline-none focus:ring-1 focus:ring-foreground "
      />
    </form>
  );
}
