"use server";

import { prisma } from "@/utils/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const ZodGroup = z.object({
  name: z.string().min(4),
});

export async function SaveGroupContact(prevState, formData) {
  const isValidatedGroup = ZodGroup.safeParse(
    Object.fromEntries(formData.entries())
  );
  //   const isValidatedGroup = Object.fromEntries(formData.entries());
  if (!isValidatedGroup.success) {
    return {
      Error: isValidatedGroup.error.flatten().fieldErrors,
    };
  }

  //   console.log(isValidatedGroup);
  try {
    await prisma.group.create({
      data: {
        name: isValidatedGroup.data.name,
      },
    });
  } catch (error) {
    // throw new error("failed to get group");
    console.log(error);
  }
  revalidatePath("/contacts");
}
