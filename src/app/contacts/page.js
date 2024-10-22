import { SearchBox } from "@/components/search";
import { BtnAddContact } from "@/components/btn";
import { GridContact } from "@/components/grid.contact";
import { SumContacts } from "@/components/sum.contacts";

export default function ContactPage() {
  return (
    <div className=" w-full h-screen bg-foreground pt-12 px-4 sm:px-0">
      <div className="max-w-4xl  w-full mx-auto bg-background  rounded-md   flex flex-col gap-2  items-center ">
        <div className="flex  gap-2 w-full px-5 pt-7 pb-4 ">
          <SumContacts />
          <SearchBox />
          <BtnAddContact />
        </div>
        <GridContact />
      </div>
    </div>
  );
}
