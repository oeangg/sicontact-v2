import { GetContactsItem } from "@/actions/get.contacts";
export async function SumContacts({ query }) {
  const sumContact = await GetContactsItem(query);

  return (
    <div className="w-full  pr-14 text-right ">
      <p className=" text-sm font-normal">Total contact : [ {sumContact} ]</p>
    </div>
  );
}
