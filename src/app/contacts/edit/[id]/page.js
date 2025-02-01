import { GetGroup } from "@/actions/get.groups";
import { UpdateFormContact } from "@/components/edit.form";
import { GetContactsById } from "@/actions/get.contacts";
import { notFound } from "next/navigation";

export default async function UpdateContactPage({ params }) {
  const selectGroup = await GetGroup();
  const { id } = await params;

  const contact = await GetContactsById(id);
  if (!contact) {
    notFound();
  }

  return (
    <div className="w-full h-screen bg-transparent pt-12 px-4 sm:px-0">
      <div className="max-w-xl  w-full mx-auto bg-background py-8 px-3  rounded-md   flex flex-col gap-2  items-center">
        <h1 className="text-center text-xl font-semibold mb-5">
          Page Update Contact{" "}
        </h1>
        <UpdateFormContact selectGroup={selectGroup} contact={contact} />
      </div>
    </div>
  );
}
