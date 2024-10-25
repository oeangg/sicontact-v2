"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function DeleteContact(id) {
  try {
    await prisma.contact.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/contacts");
}
