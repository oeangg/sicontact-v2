import { AddFormContact } from "@/components/add.form";
import { GetGroup } from "@/actions/get.groups";

export default async function AddContactPage() {
  const selectGroup = await GetGroup();

  return (
    <div className="w-full h-screen bg-foreground pt-12 px-4 sm:px-0">
      <div className="max-w-xl  w-full mx-auto bg-background py-8 px-3  rounded-md   flex flex-col gap-2  items-center">
        <h1 className="text-center text-xl font-semibold mb-5">
          Page Add Contact{" "}
        </h1>
        <AddFormContact selectGroup={selectGroup} />
      </div>
    </div>
  );
}
