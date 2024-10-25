import { GetGroup } from "@/actions/group";
import { GridForm } from "@/components/group.form";
export default async function UpdateContactPage() {
  const groups = await GetGroup();

  return (
    <div className="w-full h-screen bg-foreground pt-12 ">
      <div className="max-w-xl   w-full mx-auto bg-background py-4  rounded-md   flex flex-col gap-2  items-center">
        <h1 className="text-center text-xl font-semibold mb-4 ">
          Page Group Contact
        </h1>
        <GridForm groups={groups} />
      </div>
    </div>
  );
}
