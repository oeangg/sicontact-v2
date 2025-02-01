import { GetContactsItem } from "@/actions/get.contacts";
export async function SumContacts({ query }) {
  const sumContact = await GetContactsItem(query);

  return (
    <div className="w-full  pr-14 text-right ">
      <p className=" text-xs font-thin">Total contact : [ {sumContact} ]</p>
    </div>
  );
}
